import { InterivewWithAuthorAndQuestion } from "@/typings";

export default async function getInterviews() {
  const response = await fetch("http://localhost:3000/api/interview", {
    method: "GET",
    next: {
      tags: ["interview", "question"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const { data }: { data: InterivewWithAuthorAndQuestion[] } =
    await response.json();

  return data;
}
