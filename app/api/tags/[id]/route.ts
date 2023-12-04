import { db } from "@/db";
import { tags } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: number } }
) {
  try {
    const tag = await db.select().from(tags).where(eq(tags.id, id)).limit(1);

    if (!tag) {
      return NextResponse.json(
        { error: "tag youre lookin for not found" },
        { status: 410 }
      );
    }

    return NextResponse.json(
      { message: "get tag successfully", data: tag },
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
