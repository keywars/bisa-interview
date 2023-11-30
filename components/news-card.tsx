import slugify from "@/lib/slugify";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
  blog: {
    title: string;
    author: string;
    publishedAt: string;
  };
}

const NewsCard = ({ blog }: NewsCardProps) => {
  return (
    <div className="border border-violet-500/70 rounded-lg py-3 px-4 flex justify-between items-center hover:bg-gray-100 hover:scale-105 transition-all duration-300">
      <div className="flex-1 flex flex-col">
        <span className="text-xs text-violet-500/80 capitalize font-mono">
          {blog.author}
        </span>
        <Link
          aria-label={`Read more about ${blog.title}`}
          href={`/blog/${slugify(blog.title)}`}
          className="font-bold tracking-wide text-gray-600 capitalize text-lg underline-offset-[3px] hover:underline"
        >
          {blog.title}
        </Link>
      </div>
      <time className="text-sm font-medium w-[121px] md:[text-wrap:balance] text-right">
        {blog.publishedAt}
      </time>
    </div>
  );
};

export default NewsCard;
