import countQuestion from "@/actions/interview/count-question";
import getInterviewById from "@/actions/interview/get-interview-by-id";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CollectionDetailPageProps {
  params: {
    collectionId: string;
  };
}

const CollectionDetailPage = async ({
  params: { collectionId },
}: CollectionDetailPageProps) => {
  const [interview, questionTotal] = await Promise.all([
    getInterviewById(collectionId),
    countQuestion(collectionId),
  ]);

  if (!interview) {
    notFound();
  }

  return (
    <div className="min-h-screen space-y-7">
      <div className="max-w-screen-2xl mx-auto px-3 py-5 border-b">
        <div className="max-w-3xl mx-auto rounded-md">
          <div className="p-5 flex w-full justify-between space-x-16 items-center">
            <div className="flex-1 space-y-4">
              <div className="space-y-1.5">
                <h1 className="font-bold text-3xl font-sans capitalize leading-tight">
                  {interview.title}
                </h1>
                <p className="text-sm text-gray-600">
                  {questionTotal.at(0)?._count} questions
                </p>
              </div>

              <p className="prose prose-md">{interview.description}</p>
            </div>
            <div className="w-36">
              <Link
                href={`/collections/${interview.id}/1`}
                className={buttonVariants({ size: "lg" })}
              >
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="font-bold text-xl">Questions</h2>
        <div className="grid grid-cols-2 gap-2">
          {interview.questions.map((question, index) => (
            <Link
              key={index}
              href={`/collections/${interview.id}/${question.questionNumber}`}
              className="hover:underline trasition-all duration-300 line-clamp-2 underline-offset-2"
            >
              &raquo;{" "}
              {question.inquiry.replace(/<[^>]*>|[^a-zA-Z0-9,;\-.!?<> ]/g, "")}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailPage;
