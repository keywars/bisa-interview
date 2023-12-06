import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { InterviewWithTag } from "@/typings";

interface InterviewCardProps {
  interview: InterviewWithTag;
  index: number;
}

const InterviewCard = ({ interview, index }: InterviewCardProps) => {
  return (
    <div className="aspect-[2/1] rounded-md p-4 bg-white shadow-sm border">
      <div
        className="rounded-md h-full p-5 relative"
        // style={{ backgroundColor: `${data.bg}` }}
      >
        <Link
          href={`/collections/${interview.id}`}
          className="font-bold text-xl font-sans [wrap-text:balance] hover:underline transition-all duration-200 capitalize line-clamp-2"
          aria-label={`Explore ${interview.title}`}
        >
          {interview.title}
        </Link>
        <Badge className="absolute bottom-3 left-7">
          {interview.tag?.name}
        </Badge>
      </div>
    </div>
  );
};

export default InterviewCard;
