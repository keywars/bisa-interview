import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getQuestionsByInterviewId(interviewId: string) {
  const results = await db
    .select()
    .from(questions)
    .where(eq(questions.interviewId, interviewId));

  return results;
}
