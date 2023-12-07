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
      {/* <span className="text-lg font-bold bg-violet-500 text-white font-mono p-2.5 rounded-sm">
        Explanation
      </span> */}

      <div className="relative my-7">
        <article
          className={cn(
            "px-3 prose dark:prose-invert prose-p:text-justify md:prose-md"
          )}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{answer}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default Explanation;
