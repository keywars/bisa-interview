import createQuestion from "@/actions/question/create-question";
import { db } from "@/db";
import slugify from "@/lib/slugify";
import {
  TQuestionSchema,
  questionSchema,
} from "@/lib/validation/question.schema";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const body = (await request.json()) as TQuestionSchema;

  const validation = questionSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors.at(0)?.message },
      { status: 400 }
    );
  }

  const slug = slugify(body.question);

  try {
    await createQuestion(slug, body.question, body.explanation, id);

    revalidateTag("question");

    return NextResponse.json({ message: "get all question" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
