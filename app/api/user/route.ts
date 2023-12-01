import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function GET(request: Request) {
  try {
    const user = await db.select().from(users);

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 }
    );
  }
}
