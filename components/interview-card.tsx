import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

interface InterviewCardProps {
  data: { label: string; tag: string; bg: string; tagbg: string };
  index: number;
}

const InterviewCard = ({ data, index }: InterviewCardProps) => {
  return (
    <div className="aspect-[2/1] rounded-md p-4 bg-white shadow-sm border">
      <div
        className="rounded-md h-full p-5 relative"
        // style={{ backgroundColor: `${data.bg}` }}
      >
        <Link
          href="#interviewDetail"
          className="font-bold text-xl font-mono [wrap-text:balance] hover:underline transition-all duration-200 capitalize line-clamp-2"
        >
          {data.label}
        </Link>
        <Badge
          className="absolute bottom-3 left-7"
          // style={{ backgroundColor: `${data.tagbg}` }}
        >
          {data.tag}
        </Badge>

        {index === 5 && (
          <strong className="absolute bottom-5 right-5 font-bold text-violet-600 animate-pulse text-lg">
            NEW
          </strong>
        )}
      </div>
    </div>
  );
};

export default InterviewCard;
