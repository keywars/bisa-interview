import { InterivewWithAuthorAndQuestion } from "@/typings";

export default async function getInterviews() {
  const response = await fetch("http://localhost:3000/api/interview", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["interview"],
    },
  });

  if (!response.ok) {
    throw new Error("failed to fetch interview");
  }

  const { data } = await response.json();

  return data as InterivewWithAuthorAndQuestion[];
}
