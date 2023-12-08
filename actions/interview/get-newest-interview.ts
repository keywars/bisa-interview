import { db } from "@/db";
import { interviews } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function getNewestInterview() {
  const [interview] = await db.query.interviews.findMany({
    where: eq(interviews.status, "published"),
    orderBy: [desc(interviews.createdAt)],
    limit: 1,
  });

  if (!interview) {
    return null;
  }

  return interview;
}
