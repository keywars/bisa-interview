import { NextResponse } from "next/server";
import {
  interviewCreateSchema,
  TInterviewCreateSchema,
} from "@/lib/validation/interview.schema";
import slugify from "@/lib/slugify";
import { interviews } from "@/db/schema";
import getCurrentUser from "@/actions/user/get-current-user";
import { db } from "@/db";
import { revalidateTag } from "next/cache";
import getInterviewBySlug from "@/actions/interview/get-interview-by-slug";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  const body = (await request.json()) as TInterviewCreateSchema;

  const validation = interviewCreateSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors.at(0)?.message },
      { status: 400 }
    );
  }

  const slug = slugify(body.title);

  const interviewExists = await getInterviewBySlug(slug);

  if (interviewExists) {
    return NextResponse.json(
      { error: "interview already exits" },
      { status: 409 }
    );
  }

  const { title } = body;

  // const interview = await createInterview(title, slug);
  const interview = await db
    .insert(interviews)
    .values({ title, slug, authorId: currentUser?.id })
    .returning({ id: interviews.id });

  revalidateTag("interview");

  return NextResponse.json(
    { message: "create interview success", data: interview.at(0)?.id },
    { status: 201 }
  );
}

export async function GET(request: Request) {
  try {
    const interviews = await db.query.interviews.findMany({
      orderBy: (interviews, { desc }) => [desc(interviews.createdAt)],
      with: {
        author: true,
        questions: true,
      },
    });

    return NextResponse.json(
      { message: "success", data: interviews },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
