"use server";

interface getPostsProps {
  status?: "published" | "draft";
}

export default async function getPosts(
  { status }: getPostsProps = { status: undefined },
) {
  try {
    const queryParams = status ? `?status=${status}` : "";

    const response = await fetch(
      `http://localhost:3000/api/blogs${queryParams}`,
      {
        method: "GET",
        next: {
          tags: ["blog"],
        },
      },
    );

    if (!response.ok) {
      throw new Error("failed to fetch posts");
    }

    const { data } = await response.json();

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
