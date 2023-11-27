import NewsArticle from "@/components/news-article";
import RelatedArticle from "@/components/related-article";
import Link from "next/link";
import React from "react";

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

const NewsDetailPage = ({ params: { slug } }: NewsDetailPageProps) => {
  return (
    <div className="max-w-screen-md mx-auto py-5">
      <div className="mb-12 mt-6">
        <Link
          href="/news"
          className="text-gray-800 md:pl-5 hover:text-sky-500/80"
        >
          &laquo; Back to news
        </Link>
      </div>

      <NewsArticle title={slug} />

      <RelatedArticle />
    </div>
  );
};

export default NewsDetailPage;
