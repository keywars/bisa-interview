import getPublishedInterview from "@/actions/interview/get-published-interview";
import FilterTabs from "@/components/filter-tabs";
import Header from "@/components/header";
import InterviewCard from "@/components/interview-card";
import { InterviewWithTag } from "@/typings";
import { type Metadata } from "next";

interface CollectionPageProps {
  searchParams: {
    sort: "asc" | "desc";
  };
}

export const metadata: Metadata = {
  title: "Collections | Bisa Interview",
  description: "List of collection all interview question.",

  openGraph: {
    title: "Collections | Bisa Interview",
    description: "List of collection all interview question.",
    // url: "http://localhost:3000/collections",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const CollectionPage = async ({
  searchParams: { sort },
}: CollectionPageProps) => {
  const interviews = (await getPublishedInterview({
    sort,
  })) as InterviewWithTag[];

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-3 space-y-5">
        <Header
          title="Collections"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error officiis facere, dolore et, similique obcaecati fugit iure a dolores tempore laborum!"
        />

        <div className="space-y-8">
          <FilterTabs />

          <div className="pb-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interviews?.map((interview, index) => (
                <InterviewCard
                  index={index}
                  interview={interview}
                  key={index}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <p className="text-gray-700 dark:text-gray-200 animate-pulse">
                Load more....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
