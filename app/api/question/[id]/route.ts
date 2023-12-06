import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import {
  editQuestionSchema,
  TQuestionSchema,
} from "@/lib/validation/question.schema";
import slugify from "@/lib/slugify";
import { revalidateTag } from "next/cache";
import getQuestionById from "@/actions/question/get-question-by-id";
import getInterviewBySlug from "@/actions/interview/get-interview-by-slug";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const [question] = await db
      .select()
      .from(questions)
      .where(eq(questions.id, Number(id)))
      .limit(1);

    if (!question) {
      return NextResponse.json(
        { error: "question your're lookin for not found" },
        { status: 410 }
      );
    }

    return NextResponse.json(
      {
        message: "Get question successfully",
        data: question,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const body = (await request.json()) as TQuestionSchema;

  const validation = editQuestionSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors.at(0)?.message },
      { status: 400 }
    );
  }

  const isExists = await getInterviewBySlug(slugify(body.question));

  if (isExists) {
    return NextResponse.json(
      { error: "question already exits" },
      { status: 409 }
    );
  }

  try {
    await db
      .update(questions)
      .set({
        inquiry: body.question,
        answer: body.explanation,
        slug: slugify(body.question),
      })
      .where(eq(questions.id, Number(id)));

    revalidateTag("question");

    return NextResponse.json(
      { message: "update question successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
