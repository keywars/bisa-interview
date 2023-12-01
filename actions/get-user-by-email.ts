"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getUserByEmail(email: string) {
  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return user || null;
  } catch (error) {
    console.error(`Error getting user by email: ${error}`);
    return null;
  }
}
