"use server";

import { Blog } from "@/db/schema";

export default async function getPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/blogs", {
      method: "GET",
    });

    if (!response.ok) {
      return null;
    }

    const { data } = await response.json();

    return data as Blog[];
  } catch (e) {
    console.error(e);
    return null;
  }
}
