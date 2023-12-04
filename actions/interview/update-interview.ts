import { db } from "@/db";
import { Interview, interviews, tags } from "@/db/schema";
import slugify from "@/lib/slugify";
import { eq } from "drizzle-orm";

export default async function updateInterview(
  body: Partial<Interview>,
  id: string
) {
  try {
    await db
      .update(interviews)
      .set({
        title: body.title ?? undefined,
        description: body.description ?? undefined,
        status: body.status ?? undefined,
        slug: body.title ? slugify(body.title) : undefined,
        tagId: body.tagId ?? undefined,
      })
      .where(eq(interviews.id, id));

    return "create interview successfully";
  } catch (error) {
    throw new Error("failed to create interview");
  }
}
