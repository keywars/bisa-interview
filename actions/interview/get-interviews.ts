import { db } from "@/db";

export default async function getInterviews() {
  try {
    return await db.query.interviews.findMany({
      with: {
        author: true,
        questions: true,
      },
      orderBy: (interviews, { desc }) => [desc(interviews.createdAt)],
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
