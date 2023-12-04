import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "get all question" }, { status: 200 });
}
