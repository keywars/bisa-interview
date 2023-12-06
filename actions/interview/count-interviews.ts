import { db } from "@/db";
import { interviews } from "@/db/schema";
import { count, eq } from "drizzle-orm";

export default async function countInterviews() {
  const interviewsTotal = await db
    .select({ _count: count() })
    .from(interviews)
    .where(eq(interviews.status, "published"));

  return interviewsTotal;
}
