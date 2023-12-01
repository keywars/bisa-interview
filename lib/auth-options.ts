import { type NextAuthOptions, User } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import CreadentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/lib/validation/user.schema";
import { TUserSchema, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    CreadentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter email address",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email && !credentials?.password) {
          return null;
        }

        const validation = loginSchema.safeParse({
          email: credentials.email,
          password: credentials.password,
        });

        if (!validation.success) {
          return null;
        }

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .limit(1);

        if (!user && !(user as TUserSchema).password) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          user.password as string,
          credentials.password
        );

        if (!passwordMatches) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};
