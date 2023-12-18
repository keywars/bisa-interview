import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
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
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  interviews: many(interviews),
  posts: many(blogs),
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
    status: interviewStatus("status").default("draft"),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
    authorId: text("author_id"),
    tagId: integer("tag_id"),
  },
  (interview) => {
    return {
      titleIdx: index("title_idx").on(interview.title),
    };
  },
);

const interviewSchema = createSelectSchema(interviews);
export type Interview = z.infer<typeof interviewSchema>;

export const interviewsRelations = relations(interviews, ({ one, many }) => ({
  author: one(users, {
    fields: [interviews.authorId],
    references: [users.id],
  }),
  questions: many(questions),
  tag: one(tags, {
    fields: [interviews.tagId],
    references: [tags.id],
  }),
}));

export const questions = pgTable(
  "question",
  {
    id: serial("id").primaryKey(),
    questionNumber: integer("question_number").notNull(),
    inquiry: text("inquiry").notNull(),
    slug: text("slug").notNull().unique(),
    answer: text("answer").notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
    interviewId: text("interview_id").references(() => interviews.id, {
      onDelete: "cascade",
    }),
  },
  (question) => {
    return {
      inquiryIdx: index("inquiry_idx").on(question.inquiry),
    };
  },
);

const questionSchema = createSelectSchema(questions);
export type Question = z.infer<typeof questionSchema>;

export const questionsRelations = relations(questions, ({ one }) => ({
  interview: one(interviews, {
    fields: [questions.interviewId],
    references: [interviews.id],
  }),
}));

export const tags = pgTable("tag", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  slug: text("slug").unique().notNull(),
});

const tagSchema = createSelectSchema(tags);
export type Tag = z.infer<typeof tagSchema>;

export const tagsRelations = relations(tags, ({ many }) => ({
  interviews: many(interviews),
}));

export const blogStatus = pgEnum("status", ["draft", "published"]);
export const blogs = pgTable(
  "blog",
  {
    id: text("id")
      .primaryKey()
      .default(sql`gen_random_uuid()`),
    authorId: text("author_id"),
    title: varchar("title", { length: 100 }).notNull(),
    slug: text("slug").unique(),
    content: text("content").notNull(),
    status: blogStatus("status").default("draft"),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow(),
  },
  (table) => {
    return {
      slugIdx: index("slug_idx").on(table.slug),
    };
  },
);

const blogSchema = createSelectSchema(blogs);
export type Blog = z.infer<typeof blogSchema>;

export const blogsRelations = relations(blogs, ({ one }) => ({
  author: one(users, {
    fields: [blogs.authorId],
    references: [users.id],
  }),
}));
