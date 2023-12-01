import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 25 }),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  body: text("body"),
  isCompleted: boolean("is_completed").default(false),
});
