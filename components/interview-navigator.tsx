import { cn } from "@/lib/utils";
import Link from "next/link";

interface InterviewNavigatorProps {
  interviewId: string;
  currentCuestionNumber: number;
  totalQuestion: number;
}

const InterviewNavigator = ({
  interviewId,
  currentCuestionNumber,
  totalQuestion,
}: InterviewNavigatorProps) => {
  return (
    <div className="flex justify-between gap-8 pb-8 lg:pb-5">
      {/* TODO : Update aria label dynamic */}
      <Link
        href={`/collections/${interviewId}/${currentCuestionNumber - 1}`}
        className={cn(
          "flex-1",
          currentCuestionNumber === 1 ? "hidden" : "w-1/2"
        )}
        aria-label="Previous: Getting started"
      >
        <div className="border rounded-md py-2.5 px-2.5 lg:py-5 lg:px-5">
          <p className="text-xs md:text-sm italic">Previous</p>
          <p className="text-sm md:text-lg font-bold tracking-wide text-sky-500/75 line-clamp-1">
            &laquo; Getting started
          </p>
        </div>
      </Link>

      {/* TODO : Update aria label dynamic */}
      <Link
        href={`/collections/${interviewId}/${currentCuestionNumber + 1}`}
        className={cn(
          "flex-1",
          currentCuestionNumber === totalQuestion ? "hidden" : "block w-1/2"
        )}
        aria-label="Next: How to make second pancake"
      >
        <div className="border rounded-md py-2.5 px-2.5 lg:py-5 lg:px-5 text-right">
          <p className="text-xs md:text-sm italic">Next</p>
          <p className="text-sm md:text-lg font-bold tracking-wide text-sky-500/75 line-clamp-1">
            How to make second pencake &raquo;
          </p>
        </div>
      </Link>
    </div>
  );
};

export default InterviewNavigator;
