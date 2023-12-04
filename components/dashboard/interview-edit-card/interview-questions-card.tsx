import MdiPlusCircleOutline from "@/components/icons/MdiPlusCircleOutline";
import TablerPencil from "@/components/icons/TablerPencil";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface InterviewQuestionsCardProps {
  id: string;
}

const InterviewQuestionsCard = ({ id }: InterviewQuestionsCardProps) => {
  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Add question</h1>
        <Link
          href="/dashboard/interviews/1234-abcd/question/add"
          aria-label="Add a question to the interview"
          className={buttonVariants({ size: "sm" })}
        >
          <MdiPlusCircleOutline className="mr-2 w-5 h-5" />
          Add question
        </Link>
      </CardHeader>
      <CardContent className="rounded-md">
        <ScrollArea className="h-[400px] rounded-md">
          <p>add minimal 1 question</p>
          {/* {tableOfContent.map((content, index) => (
            <div
              key={index}
              className="py-2 pl-4 pr-2 flex items-center h-[50px] rounded-md bg-gray-200/50"
            >
              <p className="flex-1 capitalize font-semibold text-gray-700/80 line-clamp-1 text-sm font-sans">
                {content}
              </p>
              <Button size="sm" className="w-[50px]" variant="ghost">
                <TablerPencil className="w-4 h-4" />
              </Button>
            </div>
          ))} */}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default InterviewQuestionsCard;
