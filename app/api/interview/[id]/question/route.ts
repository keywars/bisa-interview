import createQuestion from "@/actions/question/create-question";
import { db } from "@/db";
import slugify from "@/lib/slugify";
import {
  TQuestionSchema,
  questionSchema,
} from "@/lib/validation/question.schema";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { questions } from "@/db/schema";
import getQuestionBySlug from "@/actions/question/get-question-by-slug";

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const body = (await request.json()) as TQuestionSchema & {
    questionNumber: number;
  };

  const validation = questionSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors.at(0)?.message },
      { status: 400 }
    );
  }

  const slug = slugify(body.question);

  try {
    const newQuestion = await db
      .insert(questions)
      .values({
        slug,
        inquiry: body.question,
        answer: body.explanation,
        questionNumber: body.questionNumber,
        interviewId: id,
      })
      .onConflictDoNothing({ target: questions.slug });

    if (newQuestion.rowCount === 0) {
      return NextResponse.json(
        { error: "question already exits" },
        { status: 409 }
      );
    }

    revalidateTag("question");

    return NextResponse.json(
      { message: "new question created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
