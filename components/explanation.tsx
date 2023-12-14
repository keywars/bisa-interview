"use client";

import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ExplanationProps {
  answer: string;
}

const Explanation = ({ answer }: ExplanationProps) => {
  return (
    <div>
      {/* <span className="rounded-sm bg-violet-500 p-2.5 font-mono text-lg font-bold text-white">
        Explanation
      </span> */}

      <div className="relative my-7">
        <article
          className={cn(
            "md:prose-md prose px-3 dark:prose-invert prose-headings:font-extrabold prose-p:text-justify prose-blockquote:text-gray-500",
          )}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{answer}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default Explanation;
