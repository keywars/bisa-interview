import { db } from "@/db";
import { interviews } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getInterviewBySlug(slug: string) {
  try {
    const [interview] = await db
      .select()
      .from(interviews)
      .where(eq(interviews.slug, slug));

    return interview || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
