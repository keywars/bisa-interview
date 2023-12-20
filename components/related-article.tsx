import React from "react";
import NewsCard from "./news-card";
import getPosts from "@/actions/blog/get-posts";

const RelatedArticle = async () => {
  const posts = (await getPosts()) as {
    title: string;
    id: string;
    createdAt: Date | null;
    slug: string | null;
    status: "draft" | "published" | null;
    authorId: string | null;
    content: string;
    author: {
      id: string;
      name: string | null;
      email: string;
      password: string;
      createdAt: Date | null;
    } | null;
  }[];

  return (
    <div className="mt-16 border-t py-12">
      <h3 className="pb-7 pl-2 text-3xl font-bold">Related Articles</h3>
      <div className="ml-3 space-y-4 border-l-2 border-violet-500/50 pl-8 dark:border-violet-500">
        {posts.slice(0, 4).map((post, index) => (
          <NewsCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticle;
