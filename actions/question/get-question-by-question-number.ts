import { db } from "@/db";
import { questions } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export default async function getQuestionByQuestionNumber(
  questionNumber: number,
  interviewId: string
) {
  const question = await db
    .select()
    .from(questions)
    .where(
      and(
        eq(questions.questionNumber, questionNumber),
        eq(questions.interviewId, interviewId)
      )
    )
    .limit(1);

  if (!question.length) {
    return null;
  }

  return question;
}
