import { db } from "@/db";
import { interviews } from "@/db/schema";
import { ilike } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get("search");

  try {
    const results = await db
      .select()
      .from(interviews)
      .where(ilike(interviews.title, `%${search}%`));

    return NextResponse.json(
      { message: "search results", data: results },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
