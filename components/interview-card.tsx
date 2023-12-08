import Link from "next/link";
import React from "react";
import { Badge, badgeVariants } from "./ui/badge";
import { InterviewWithTag } from "@/typings";

interface InterviewCardProps {
  interview: InterviewWithTag;
  index: number;
}

const InterviewCard = ({ interview, index }: InterviewCardProps) => {
  return (
    <div className="rounded-md p-7 bg-white shadow-sm border">
      <div className="rounded-md h-full space-y-3.5 flex flex-col justify-end">
        <div className="space-y-1.5">
          <p className="prose prose-sm line-clamp-2">{interview.description}</p>

          <Link
            href={`/collections/${interview.id}`}
            className="font-bold text-xl font-sans [wrap-text:balance] hover:underline transition-all duration-200 capitalize line-clamp-2"
            aria-label={`Explore ${interview.title}`}
          >
            {interview.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
