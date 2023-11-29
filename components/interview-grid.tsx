import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import InterviewCard from "./interview-card";

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

const InterviewGrid = () => {
  return (
    <section className="min-h-[50dvh]">
      <div className="py-20 max-w-screen-xl mx-auto px-3">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h1 className="font-bold text-4xl capitalize">Selected</h1>
            <p className="max-w-lg mx-auto text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem illo expedita atque ut temporibus dolor alias?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {dummyData.slice(0, 3).map((data, index) => (
              <InterviewCard data={data} index={index} key={index} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/collections"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hover:text-sky-600 text-gray-700 group transition ease-in-out duration-200 rounded-xl"
              )}
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewGrid;
