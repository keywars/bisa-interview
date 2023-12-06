import { db } from "@/db";
import { count } from "drizzle-orm";
import { questions } from "@/db/schema";

export default async function countQuestions() {
  const total = await db.select({ _count: count() }).from(questions);
  return total;
}
