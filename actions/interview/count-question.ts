import { db } from "@/db";
import { count, eq } from "drizzle-orm";
import { questions } from "@/db/schema";

export default async function countQuestion(interviewId: string) {
  const total = await db
    .select({ _count: count() })
    .from(questions)
    .where(eq(questions.interviewId, interviewId));

  return total;
}
