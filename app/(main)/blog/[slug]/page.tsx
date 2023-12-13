import NewsArticle from "@/components/news-article";
import RelatedArticle from "@/components/related-article";
import Link from "next/link";
import React from "react";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail = ({ params: { slug } }: BlogDetailProps) => {
  return (
    <div className="max-w-screen-md mx-auto py-5">
      <div className="mb-12 mt-6">
        <Link
          href="/blog"
          className="text-gray-800 dark:text-gray-300 md:pl-5 hover:text-sky-500/80 dark:hover:text-sky-500"
          aria-label="Go back to the news page"
        >
          &laquo; Back to news
        </Link>
      </div>

      <NewsArticle title={slug} />

      <RelatedArticle />
    </div>
  );
};

export default BlogDetail;
