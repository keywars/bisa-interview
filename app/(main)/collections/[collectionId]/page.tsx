import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const CollectionDetailPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-3 py-5">
        <div className="flex max-w-2xl mx-auto border shadow-sm rounded-md">
          <div className="p-5 text-center w-full space-y-5">
            <div>
              <h1 className="text-2xl font-bold">
                Beginner interview for java developer
              </h1>
              <p className="font-light text-gray-700">Total interview 120</p>
            </div>

            <Link
              href="/collections/collectionID/interview-details"
              className={buttonVariants({
                variant: "outline",
                className:
                  "text-lg font-semibold text-white bg-sky-500/75 hover:bg-sky-500/50 hover:text-white lg:hidden",
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
