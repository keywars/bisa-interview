import NewsArticle from "@/components/news-article";
import RelatedArticle from "@/components/related-article";
import Link from "next/link";
import React from "react";
import getPostBySlug from "@/actions/blog/get-post-by-slug";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail = async ({ params: { slug } }: BlogDetailProps) => {
  const post = await getPostBySlug(slug);

  return (
    <div className="mx-auto max-w-screen-md py-5">
      <div className="mb-12 mt-6">
        <Link
          href="/blog"
          className="text-gray-800 hover:text-sky-500/80 dark:text-gray-300 dark:hover:text-sky-500 md:pl-5"
          aria-label="Go back to the news page"
        >
          &laquo; Back to news
        </Link>
      </div>

      <NewsArticle post={post} />

      <RelatedArticle />
    </div>
  );
};

export default BlogDetail;
