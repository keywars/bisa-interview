import { Tag } from "@/db/schema";

export default async function getTag(tagId: number) {
  const response = await fetch(`http://localhost:3000/api/tags/${tagId}`, {
    method: "GET",
    next: {
      tags: ["tag"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const { data }: { data: Tag[] } = await response.json();

  return data.at(0) as Tag;
}
