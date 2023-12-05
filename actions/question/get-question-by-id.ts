"use server";

import { type Question } from "@/db/schema";

export default async function getQuestionById(id: number) {
  const response = await fetch(`http://localhost:3000/api/question/${id}`, {
    method: "GET",
    next: {
      tags: ["question"],
    },
  });

  if (!response.ok) {
    throw new Error("failed to get question");
  }

  const { data } = await response.json();

  return data as Question;
}
``;
