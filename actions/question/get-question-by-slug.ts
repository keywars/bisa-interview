import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getQuestionBySlug(slug: string) {
  const [interview] = await db
    .select()
    .from(questions)
    .where(eq(questions.slug, slug))
    .limit(1);

  if (!interview) {
    return null;
  }

  return interview;
}
