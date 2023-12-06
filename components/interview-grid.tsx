import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import InterviewCard from "./interview-card";
import { InterviewWithTag } from "@/typings";

interface InterviewGridProps {
  publishedInterviews: InterviewWithTag[];
}

const InterviewGrid = ({ publishedInterviews }: InterviewGridProps) => {
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
            {publishedInterviews.slice(0, 3).map((interview, index) => (
              <InterviewCard interview={interview} index={index} key={index} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/collections"
              aria-label="Explore more collections"
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
