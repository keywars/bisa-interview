import Header from "@/components/header";
import { type Metadata } from "next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import InterviewCard from "@/components/interview-card";
import FilterTabs from "@/components/filter-tabs";
import getInterviewById from "@/actions/interview/get-interview-by-id";
import getInterviews from "@/actions/interview/get-interviews";
import getPublishedInterview from "@/actions/interview/get-published-interview";
import { InterviewWithTag } from "@/typings";

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

const CollectionPage = async () => {
  const interviews = (await getPublishedInterview()) as InterviewWithTag[];

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 ">
              {interviews?.map((interview, index) => (
                <InterviewCard
                  index={index}
                  interview={interview}
                  key={index}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <p className="text-gray-700 animate-pulse">Load more....</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
