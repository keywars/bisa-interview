import getPublishedInterview from "@/actions/interview/get-published-interview";
import FilterTabs from "@/components/filter-tabs";
import Header from "@/components/header";
import InterviewCard from "@/components/interview-card";
import { InterviewWithTag } from "@/typings";
import { type Metadata } from "next";
import LoadMore from "@/components/load-more";

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
    page: 0,
  })) as InterviewWithTag[];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl space-y-5 px-3">
        <Header
          title="Collections"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error officiis facere, dolore et, similique obcaecati fugit iure a dolores tempore laborum!"
        />

        <div className="space-y-8">
          <FilterTabs />

          <div className="space-y-10 pb-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {interviews?.map((interview, index) => (
                <InterviewCard
                  index={index}
                  interview={interview}
                  key={index}
                />
              ))}

              <LoadMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
