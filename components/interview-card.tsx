import { InterviewWithTag } from "@/typings";
import Link from "next/link";
import MdiCalendarMonth from "./icons/MdiCalendarMonth";

interface InterviewCardProps {
  interview: InterviewWithTag;
  index: number;
}

const InterviewCard = ({ interview, index }: InterviewCardProps) => {
  return (
    <div className="rounded-md p-7 bg-white">
      <div className="rounded-md space-y-3.5 flex flex-col justify-end">
        <div className="space-y-3">
          <p className="prose prose-md line-clamp-2 capitalize">
            {interview.description}
          </p>

          <div className="space-y-1">
            <time className="text-sm font-light text-gray-600 flex items-center">
              <MdiCalendarMonth className="mr-1" />
              {interview.createdAt?.toDateString()}
            </time>
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
    </div>
  );
};

export default InterviewCard;
