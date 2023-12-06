import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import slugify from "@/lib/slugify";
import { Question } from "@/db/schema";

interface SidebarProps {
  questions: Question[];
  collectionId: string;
}

const Sidebar = ({ questions, collectionId }: SidebarProps) => {
  return (
    <aside className="hidden lg:block w-[345px] h-[90dvh] flex-none py-5 px-2 overflow-auto">
      <ScrollArea className="h-full w-full p-4">
        <ol className="list-disc space-y-2.5">
          {questions.map((question, index) => (
            <li key={index}>
              <Link
                href={`/collections/${collectionId}/${slugify(question.slug)}`}
                className="capitalize font-medium text-sm [text-wrap:balance] active:text-sky-100 hover:underline line-clamp-2"
                aria-label={`View ${question.inquiry}`}
              >
                {question.inquiry.replace(
                  /<[^>]*>|[^a-zA-Z0-9,;\-.!?<> ]/g,
                  ""
                )}
              </Link>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
