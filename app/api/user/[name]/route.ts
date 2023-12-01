import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params: { name } }: { params: { name: string } }
) {
  const user = await db.select().from(users).where(eq(users.name, name));

  return NextResponse.json({ data: user });
}
