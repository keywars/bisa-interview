import { db } from "@/db";
import { Blog, blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getPostBySlug(slug: string): Promise<Blog> {
  try {
    const [post] = await db.select().from(blogs).where(eq(blogs.slug, slug));

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("cant get post");
  }
}
