import { db } from "@/db";
import { questions } from "@/db/schema";
import { count, eq } from "drizzle-orm";

export default async function countInterviewQuestion(interviewId: string) {
  return await db
    .select({ count: count() })
    .from(questions)
    .where(eq(questions.interviewId, interviewId));
}
