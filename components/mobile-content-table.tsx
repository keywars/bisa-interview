"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import slugify from "@/lib/slugify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import IcBaselineKeyboardArrowRight from "./icons/IcBaselineKeyboardArrowRight";
import { ScrollArea } from "./ui/scroll-area";
import { Question } from "@/db/schema";

interface MobileContentTableProps {
  questions: Question[];
  collectionId: string;
}

const MobileContentTable = ({
  questions,
  collectionId,
}: MobileContentTableProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="border-y py-3 w-full text-left px-3 flex items-center outline-none transition-all duration-200 hover:text-sky-500/70">
          <IcBaselineKeyboardArrowRight className="w-5 h-5 mr-1 inline-flex" />
          <span>Menu</span>
        </SheetTrigger>

        <SheetContent side="left" className="px-0">
          <SheetHeader className="px-3">
            <SheetTitle>Table of contents</SheetTitle>
          </SheetHeader>

          <ScrollArea className="h-full w-full p-4">
            <ol className="list-inside list-disc space-y-2.5">
              {questions.map((question, index) => (
                <li
                  key={index}
                  onClick={() => {
                    router.push(
                      `/collections/${collectionId}/${question.slug}`
                    );
                    setOpen((open) => false);
                  }}
                  className="capitalize font-medium [text-wrap:balance] active:text-sky-100 hover:underline line-clamp-2"
                >
                  {question.inquiry.replace(
                    /<[^>]*>|[^a-zA-Z0-9,;\-.!?<> ]/g,
                    ""
                  )}
                </li>
              ))}
            </ol>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileContentTable;
