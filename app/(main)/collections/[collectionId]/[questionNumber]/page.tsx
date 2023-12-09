import countQuestion from "@/actions/interview/count-question";
import getQuestionByQuestionNumber from "@/actions/question/get-question-by-question-number";
import Explanation from "@/components/explanation";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import QuestionNavigation from "@/components/question-navigation";
import { notFound } from "next/navigation";

interface DetailInterviewPageProps {
  params: {
    collectionId: string;
    questionNumber: number;
  };
}

const DetailInterviewPage = async ({
  params: { questionNumber, collectionId },
}: DetailInterviewPageProps) => {
  const [question, questionTotal] = await Promise.all([
    getQuestionByQuestionNumber(questionNumber, collectionId),
    countQuestion(collectionId),
  ]);

  if (!question) {
    notFound();
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-1 min-h-[87dvh]">
      <div className="py-5 flex flex-col justify-between h-full space-y-14">
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <Link
              href={`/collections/${collectionId}`}
              className={buttonVariants({ variant: "link" })}
            >
              &laquo; Table of content
            </Link>

            <QuestionNavigation
              question={question}
              questionTotal={questionTotal.at(0)?._count as number}
              interviewId={collectionId}
            />
          </div>

          <div className="space-y-10">
            <h1 className="text-3xl font-bold font-sans">
              {question?.at(0)?.inquiry}
            </h1>

            <Separator />

            <Explanation answer={question?.at(0)?.answer as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInterviewPage;
