import React from "react";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";

interface NewsArticleProps {
  post:
    | {
        title: string;
        status: "published" | "draft" | null;
        slug: string | null;
        id: string;
        createdAt: Date | null;
        authorId: string | null;
        image: string;
        content: string;
        author: {
          id: string;
          name: string | null;
          email: string;
          password: string;
          createdAt: Date | null;
        } | null;
      }
    | undefined;
}

const NewsArticle = ({ post }: NewsArticleProps) => {
  return (
    <article className="md:prose-md prose px-5 dark:prose-invert prose-p:text-justify lg:px-0">
      <div className="leading-tight">
        <p className="m-2.5 font-bold text-gray-500">
          {/* TODO: Update aria-label to dynamic author message */}
          <Link
            className="capitalize no-underline hover:underline"
            href="#author-detail"
            aria-label={`Jump to ${post?.author?.name}'s details`}
          >
            {post?.author?.name}
          </Link>{" "}
          | {post?.createdAt?.toDateString()}
        </p>
        <h1>{post?.title}</h1>
      </div>

      <Image
        priority
        src={post?.image.split("public").at(1) as string}
        alt="article dummy img"
        className="h-[434px] w-full rounded-md object-cover"
        width={500}
        height={500}
        quality={70}
      />

      <Markdown remarkPlugins={[remarkGfm]}>{post?.content}</Markdown>
    </article>
  );
};

export default NewsArticle;
