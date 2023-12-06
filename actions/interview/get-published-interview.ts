import { db } from "@/db";
import { interviews } from "@/db/schema";
import { eq } from "drizzle-orm";
import { InterviewWithTag } from "@/typings";

export default async function getPublishedInterview(limit: number = 10) {
  const publisedInterview = await db.query.interviews.findMany({
    where: eq(interviews.status, "published"),
    with: {
      tag: true,
    },
    limit: limit,
  });

  return publisedInterview as InterviewWithTag[];
}
