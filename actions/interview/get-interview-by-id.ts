import { db } from "@/db";
import { interviews } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getInterviewById(id: string) {
  try {
    return await db.query.interviews.findFirst({
      where: eq(interviews.id, id),
      with: {
        author: true,
        questions: true,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
