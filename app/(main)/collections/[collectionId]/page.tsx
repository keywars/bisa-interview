import countQuestion from "@/actions/interview/count-question";
import getInterviewById from "@/actions/interview/get-interview-by-id";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

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

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-3 py-5">
        <div className="flex max-w-2xl mx-auto border shadow-sm rounded-md">
          <div className="p-5 text-center w-full space-y-5">
            <div>
              <h1 className="text-2xl font-bold">{interview.title}</h1>
              <p className="font-light text-gray-700">
                Total question {questionTotal.at(0)?._count}
              </p>
            </div>

            <Link
              href={`/collections/${collectionId}/1`}
              aria-label="View details about getting started with interviews in this collection"
              className={buttonVariants({
                variant: "outline",
                className:
                  "text-lg font-semibold text-white bg-sky-500/75 hover:bg-sky-500/50 hover:text-white",
              })}
            >
              Getting Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailPage;
