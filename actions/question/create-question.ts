import { db } from "@/db";
import { questions } from "@/db/schema";

export default async function createQuestion(
  slug: string,
  inquiry: string,
  answer: string,
  interviewId: string,
  questionNumber: number
) {
  try {
    await db
      .insert(questions)
      .values({ inquiry, slug, answer, interviewId, questionNumber })
      .onConflictDoNothing({ target: questions.slug });
  } catch (error) {
    console.error(error);
    throw new Error("failed to create new question");
  }
}
