import countQuestion from "@/actions/interview/count-question";
import getQuestionByQuestionNumber from "@/actions/question/get-question-by-question-number";
import Explanation from "@/components/explanation";
import MaterialSymbolsArrowLeftAlt from "@/components/icons/MaterialSymbolsArrowLeftAlt";
import MaterialSymbolsArrowRightAlt from "@/components/icons/MaterialSymbolsArrowRightAlt";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    getQuestionByQuestionNumber(questionNumber),
    countQuestion(collectionId),
  ]);

  return (
    <div className="max-w-screen-2xl mx-auto px-1 min-h-[87dvh]">
      <div className="py-5 flex flex-col justify-between h-full space-y-14">
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <Link
              href="/collections"
              className={buttonVariants({ variant: "link" })}
            >
              &laquo; Back to collections
            </Link>

            <div className="flex items-center">
              <Link
                href={`/collections/${collectionId}/${
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
                href={`/collections/${collectionId}/${
                  (question?.at(0)?.questionNumber as number) + 1
                }`}
                className={buttonVariants({
                  variant: "link",
                  className: cn(
                    (question?.at(0)?.questionNumber as number) ===
                      questionTotal.at(0)?._count &&
                      "pointer-events-none text-gray-700"
                  ),
                })}
              >
                Next <MaterialSymbolsArrowRightAlt className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="space-y-10">
            <div className="prose prose-md capitalize">
              <Markdown remarkPlugins={[remarkGfm]}>
                {question?.at(0)?.inquiry}
              </Markdown>
            </div>

            <Explanation answer={question?.at(0)?.answer as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInterviewPage;
