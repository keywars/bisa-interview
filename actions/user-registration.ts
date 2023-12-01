"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { TRegister, registerSchema } from "@/lib/validation/user.schema";
import bcrypt from "bcryptjs";
import getUserByEmail from "./get-user-by-email";

export default async function registerUser(values: TRegister) {
  const { email, name, password } = values;

  const validation = registerSchema.safeParse({
    email,
    name,
    password,
  });

  if (!validation.success) {
    throw new Error(validation.error.errors.at(0)?.message);
  }

  const user = await getUserByEmail(email);

  if (user) {
    throw new Error("user already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await db.insert(users).values({
      email: email,
      name: name,
      password: hashedPassword,
    });

    return "user registration success";
  } catch (error) {
    console.error("Failed to register new user");
    throw new Error("something went wrong");
  }
}
