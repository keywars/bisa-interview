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
          href="/collections/jsushasd-12123kasd-1212"
          className="font-bold text-xl font-sans [wrap-text:balance] hover:underline transition-all duration-200 capitalize line-clamp-2"
          aria-label={`Explore ${data.label}`}
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
          <strong className="absolute bottom-3  right-3 font-bold text-rose-600 text-lg">
            NEW
          </strong>
        )}
      </div>
    </div>
  );
};

export default InterviewCard;
