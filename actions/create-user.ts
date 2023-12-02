import { db } from "@/db";
import { users } from "@/db/schema";

export default async function createUser(
  email: string,
  name: string,
  hashedPassword: string
) {
  try {
    const newUser = await db
      .insert(users)
      .values({
        email,
        name,
        password: hashedPassword,
      })
      .returning({ insertedId: users.id });

    return newUser;
  } catch (error) {
    throw new Error("failed to create new user");
  }
}
