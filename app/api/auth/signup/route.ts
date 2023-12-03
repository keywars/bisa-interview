import createUser from "@/actions/user/create-user";
import getUserByEmail from "@/actions/user/get-user-by-email";
import { registerSchema, TRegister } from "@/lib/validation/user.schema";
import bcrypt from "bcryptjs";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as TRegister;

  const validation = registerSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({
      error: validation.error.errors.at(0)?.message,
    });
  }

  const { email, name, password } = body;

  const user = await getUserByEmail(email);

  if (user) {
    return NextResponse.json({ error: "user already exists" }, { status: 409 });
  }

  // generate hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await createUser(email.toLowerCase(), name.toLowerCase(), hashedPassword);

    revalidateTag("user");

    return NextResponse.json(
      { message: "user created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "failed to create resource" },
      { status: 500 }
    );
  }
}
