import { InterivewWithAuthorAndQuestionAndTag } from "@/typings";

export default async function getInterviews() {
  const response = await fetch("http://localhost:3000/api/interview", {
    method: "GET",
    next: {
      tags: ["interview", "question", "tag"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const { data }: { data: InterivewWithAuthorAndQuestionAndTag[] } =
    await response.json();

  return data;
}
