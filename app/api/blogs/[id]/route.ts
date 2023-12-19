import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";

interface Props {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, { params: { id } }: Props) {
  try {
    await db.delete(blogs).where(eq(blogs.id, id));

    revalidateTag("blog");

    return NextResponse.json(
      { message: "delete post successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 },
    );
  }
}
