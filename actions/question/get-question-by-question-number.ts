import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getQuestionByQuestionNumber(
  questionNumber: number
) {
  const question = await db
    .select()
    .from(questions)
    .where(eq(questions.questionNumber, questionNumber))
    .limit(1);

  if (!question) {
    return null;
  }

  return question;
}
