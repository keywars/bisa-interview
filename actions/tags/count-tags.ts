import { db } from "@/db";
import { count } from "drizzle-orm";
import { tags } from "@/db/schema";

export default async function countTag() {
  const total = await db.select({ _count: count() }).from(tags);

  return total;
}
