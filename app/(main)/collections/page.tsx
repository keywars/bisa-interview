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

const dummyData = [
  {
    label: "software engineering interview",
    tag: "software engineering",
    bg: "#CCC8AA",
    tagbg: "#7D7C7C",
  },
  {
    label: "top 250+ interview question on AWS",
    tag: "aws",
    bg: "#9AD0C2",
    tagbg: "#2D9596",
  },
  {
    label: "leetcode interview question",
    tag: "leetcode",
    bg: "#9EB8D9",
    tagbg: "#7C93C3",
  },
  {
    label: "top 100 react interview question",
    tag: "react",
    bg: "#FAE7C9",
    tagbg: "#E1C78F",
  },
  {
    label: "SQL quick revision notes for interview",
    tag: "sql",
    bg: "#CDF5FD",
    tagbg: "#A0E9FF",
  },
  {
    label: "top 50 intermediate python interview question",
    tag: "python",
    bg: "#DFCCFB",
    tagbg: "#D0BFFF",
  },
  {
    label: "Spring-boot interview question",
    tag: "spring boot",
    bg: "#B0D9B1",
    tagbg: "#79AC78",
  },
  {
    label: "micro servises interview question",
    tag: "microservice",
    bg: "#8DDFCB",
    tagbg: "#82A0D8",
  },
  {
    label: "240 core java interview question",
    tag: "java",
    bg: "#FF6969",
    tagbg: "#BB2525",
  },
];

export const metadata: Metadata = {
  title: "Collections | Bisa Interview",
  description: "List of collection all interview question.",

  openGraph: {
    title: "Collections | Bisa Interview",
    description: "List of collection all interview question.",
    url: "http://localhost:3000/collections",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const CollectionPage = () => {
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
              {dummyData.map((data, index) => (
                <InterviewCard index={index} data={data} key={index} />
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
