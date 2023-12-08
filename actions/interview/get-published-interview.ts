import { db } from "@/db";
import { interviews } from "@/db/schema";
import { asc, desc, eq } from "drizzle-orm";
import { InterviewWithTag } from "@/typings";

export default async function getPublishedInterview({
  limit = 10,
  sort = "desc",
}: {
  limit?: number;
  sort?: "asc" | "desc";
}) {
  const publisedInterview = await db.query.interviews.findMany({
    where: eq(interviews.status, "published"),
    with: {
      tag: true,
    },
    limit: limit,
    orderBy: [
      sort === "asc" ? asc(interviews.createdAt) : desc(interviews.createdAt),
    ],
  });

  return publisedInterview as InterviewWithTag[];
}
