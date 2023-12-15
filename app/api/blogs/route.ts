import { NextResponse } from "next/server";
import { blogs } from "@/db/schema";
import { db } from "@/db";

export async function GET() {
  try {
    const posts = await db.select().from(blogs);

    return NextResponse.json({ data: posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "failed to get blogs" },
      { status: 500 },
    );
  }
}
