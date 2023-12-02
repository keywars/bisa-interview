import { date, pgTable, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: date("created_at", { mode: "date" }).defaultNow(),
});

const userSchema = createSelectSchema(users);
export type User = z.infer<typeof userSchema>;
