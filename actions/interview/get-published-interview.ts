"use server";

import { db } from "@/db";
import { interviews } from "@/db/schema";
import { asc, desc, eq } from "drizzle-orm";
import { InterviewWithTag } from "@/typings";

export default async function getPublishedInterview({
  page,
}: {
  page: number;
}) {
  const perPage: number = 9;
  const publisedInterview = await db.query.interviews.findMany({
    where: eq(interviews.status, "published"),
    with: {
      tag: true,
    },
    limit: perPage,
    offset: page * perPage,
    orderBy: [desc(interviews.createdAt)],
  });

  return publisedInterview as InterviewWithTag[];
}
