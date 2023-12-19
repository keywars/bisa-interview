"use server";

import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getPublishedPosts() {
  const posts = db.query.blogs.findMany({
    where: eq(blogs.status, "published"),
    with: {
      author: true,
    },
  });

  return posts;
}
