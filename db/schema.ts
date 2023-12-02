import { relations, sql } from "drizzle-orm";
import {
  date,
  index,
  pgEnum,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";
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

export const usersRelations = relations(users, ({ many }) => ({
  interviews: many(interviews),
}));

const userSchema = createSelectSchema(users);
export type User = z.infer<typeof userSchema>;

export const interviewStatus = pgEnum("status", ["draft", "published"]);
export const interviews = pgTable(
  "interview",
  {
    id: text("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    title: varchar("title", { length: 100 }).notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    status: interviewStatus("status"),
    createdAt: date("created_at", { mode: "date" }).defaultNow(),
    authorId: text("author_id"),
  },
  (interview) => {
    return {
      titleIdx: index("title_idx").on(interview.title),
    };
  }
);

const interviewSchema = createSelectSchema(interviews);
export type Interview = z.infer<typeof interviewSchema>;

export const interviewsRelations = relations(interviews, ({ one, many }) => ({
  author: one(users, {
    fields: [interviews.authorId],
    references: [users.id],
  }),
  questions: many(questions),
}));

export const questions = pgTable(
  "question",
  {
    id: serial("id").primaryKey(),
    inquiry: text("inquiry").notNull(),
    slug: text("slug").notNull().unique(),
    answer: text("answer").notNull(),
    createdAt: date("created_at", { mode: "date" }).defaultNow(),
    interviewId: text("interview_id"),
  },
  (question) => {
    return {
      inquiryIdx: index("inquiry_idx").on(question.inquiry),
    };
  }
);

const questionSchema = createSelectSchema(questions);
export type Question = z.infer<typeof questionSchema>;

export const questionsRelations = relations(questions, ({ one }) => ({
  interview: one(interviews, {
    fields: [questions.interviewId],
    references: [interviews.id],
  }),
}));
