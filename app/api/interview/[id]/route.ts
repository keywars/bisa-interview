import updateInterview from "@/actions/interview/update-interview";
import { db } from "@/db";
import { Interview, interviews } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const interview = await db.query.interviews.findFirst({
      where: eq(interviews.id, id),
      with: {
        author: true,
        questions: true,
        tag: true,
      },
    });

    return NextResponse.json(
      { message: "get interview detail successfully", data: interview },
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

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    await db.delete(interviews).where(eq(interviews.id, id));

    revalidateTag("interview");

    return NextResponse.json({ message: "delete interview successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const body = (await request.json()) as Partial<Interview>;

  try {
    await updateInterview(body, id);

    revalidateTag("interview");

    return NextResponse.json({ message: "updated" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
