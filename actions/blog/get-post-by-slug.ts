import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getPostBySlug(slug: string) {
  try {
    const post = await db.query.blogs.findFirst({
      where: eq(blogs.slug, slug),
      with: {
        author: true,
      },
    });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("cant get post");
  }
}
