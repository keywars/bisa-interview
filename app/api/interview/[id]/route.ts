import { db } from "@/db";
import { interviews } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

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
