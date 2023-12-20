import slugify from "@/lib/slugify";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface NewsCardProps {
  post: {
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
  };
}

dayjs.extend(relativeTime);

const NewsCard = ({ post }: NewsCardProps) => {
  return (
    <div className="dark:hover:bg-zinc -800 flex items-center justify-between rounded-lg border border-violet-500/70 px-4 py-3 transition-all duration-300  hover:scale-105 hover:bg-gray-100 dark:border-violet-500 dark:hover:bg-zinc-800">
      <div className="flex flex-1 flex-col">
        <span className="font-mono text-xs capitalize text-violet-500/80 dark:text-violet-500">
          {post.author?.name}
        </span>
        <Link
          aria-label={`Read more about ${post.title}`}
          href={`/blog/${slugify(post.title)}`}
          className="text-lg font-bold capitalize tracking-wide text-gray-600 underline-offset-[3px] hover:underline dark:text-gray-300"
        >
          {post.title}
        </Link>
      </div>
      <time className="w-[121px] text-right text-sm font-medium md:[text-wrap:balance]">
        {dayjs(post.createdAt).fromNow(true)}
      </time>
    </div>
  );
};

export default NewsCard;
