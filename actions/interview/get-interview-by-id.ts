import { InterivewWithAuthorAndQuestionAndTag } from "@/typings";

export default async function getInterviewById(interviewId: string) {
  const response = await fetch(
    `http://localhost:3000/api/interview/${interviewId}`,
    { method: "GET", next: { tags: ["interview", "question"] } }
  );

  if (!response.ok) {
    throw new Error("failed to get interview detail");
  }

  const { data } = await response.json();

  return data as InterivewWithAuthorAndQuestionAndTag;
}
