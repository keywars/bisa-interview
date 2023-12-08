import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MaterialSymbolsArrowLeftAlt from "@/components/icons/MaterialSymbolsArrowLeftAlt";
import MaterialSymbolsArrowRightAlt from "@/components/icons/MaterialSymbolsArrowRightAlt";
import { Question } from "@/db/schema";

interface QuestionNavigationProps {
  interviewId: string;
  question: Question[] | null;
  questionTotal: number;
}

function QuestionNavigation({
  interviewId,
  question,
  questionTotal,
}: QuestionNavigationProps) {
  return (
    <div className="flex items-center">
      <Link
        href={`/collections/${interviewId}/${
          (question?.at(0)?.questionNumber as number) - 1
        }`}
        className={buttonVariants({
          variant: "link",
          className: cn(
            question?.at(0)?.questionNumber === 1 &&
              "pointer-events-none text-gray-700"
          ),
        })}
      >
        <MaterialSymbolsArrowLeftAlt className="w-4 h-4 mr-2" />
        Prev
      </Link>
      <Link
        href={`/collections/${interviewId}/${
          (question?.at(0)?.questionNumber as number) + 1
        }`}
        className={buttonVariants({
          variant: "link",
          className: cn(
            (question?.at(0)?.questionNumber as number) === questionTotal &&
              "pointer-events-none text-gray-700"
          ),
        })}
      >
        Next <MaterialSymbolsArrowRightAlt className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}

export default QuestionNavigation;
