"use server";

import { Tag } from "@/db/schema";

export default async function getTags() {
  try {
    const response = await fetch("http://localhost:3000/api/tags", {
      method: "GET",
      next: {
        tags: ["tag"],
      },
    });

    if (!response.ok) {
      throw new Error("failed to fetch tags");
    }

    const { data } = await response.json();

    return data as Tag[];
  } catch (error) {
    console.error(error);
    return null;
  }
}
