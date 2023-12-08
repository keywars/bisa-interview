import MdiPlusCircleOutline from "@/components/icons/MdiPlusCircleOutline";
import TablerPencil from "@/components/icons/TablerPencil";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from "@/db/schema";
import Link from "next/link";

interface InterviewQuestionsCardProps {
  id: string;
  questions: Question[];
}

const InterviewQuestionsCard = ({
  id,
  questions,
}: InterviewQuestionsCardProps) => {
  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Add question</h1>
        <Link
          href={`/dashboard/interviews/${id}/question/add`}
          aria-label="Add a question to the interview"
          className={buttonVariants({ size: "sm" })}
        >
          <MdiPlusCircleOutline className="mr-2 w-5 h-5" />
          Add question
        </Link>
      </CardHeader>
      <CardContent className="rounded-md">
        {!!questions.length ? (
          <ScrollArea className="h-[400px] rounded-md">
            {questions.map((question, index) => (
              <div
                key={index}
                className="py-2 pl-4 pr-2 flex items-center h-[50px] rounded-md bg-gray-200/50"
              >
                <p className="flex-1 capitalize font-semibold text-gray-700/80 line-clamp-1 text-sm font-sans">
                  {question.inquiry.replace(
                    /<[^>]*>|[^a-zA-Z0-9,;\-.!?<> ]/g,
                    ""
                  )}
                </p>
                <Link
                  href={`/dashboard/question/${question.id}/edit`}
                  className={buttonVariants({
                    className: "w-[50px]",
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <TablerPencil className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </ScrollArea>
        ) : (
          <p className="text-sm text-gray-600 text-center">
            Questions is Empty.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default InterviewQuestionsCard;
