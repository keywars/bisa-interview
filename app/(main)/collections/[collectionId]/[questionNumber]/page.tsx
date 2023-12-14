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
    <div className="mx-auto min-h-[87dvh] max-w-screen-2xl px-1">
      <div className="flex h-full flex-col justify-between space-y-14 py-5">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <Link
              href={`/collections/${collectionId}`}
              className={buttonVariants({
                variant: "link",
                className: "dark:text-violet-500",
              })}
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
            <h1 className="font-sans text-3xl font-bold">
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
