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

const tableOfContent = [
  "what are static blocks and static initializers in java?",
  "how to call one constructor from the other constructor?",
  "what is method overriding in java?",
  "what is super keyword in java?",
  "difference between method overloading and method overriding in java?",
  "difference between abstract class and interface?",
  "why java is platform independent?",
  "what is method overloading in java?",
  "what is difference between c++ and java?",
  "what is JIT compiler?",
  "what is bytecode in java?",
  "difference between this() and super() in java?",
  "what is a class?",
  "what is an object?",
  "what is method in java?",
  "what is encapsulation",
  "why main() method is public, static and void in java?",
  "explain about main() method in java?",
  "what is constructor in java?",
  "what is difference between length and length() method in java?",
  "what is ASCII code?",
  "what is unicode?",
  "difference between character constant and string constant in java?",
  "what are constants and how to create constants in java?",
  "difference between `>>` and `>>>` operators in java?",
];

const MobileContentTable = () => {
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
              {tableOfContent.map((content, index) => (
                <li
                  key={index}
                  onClick={() => {
                    router.push(
                      `/collections/collectionID/${slugify(content)}`
                    );
                    setOpen((open) => false);
                  }}
                  className="capitalize font-medium [text-wrap:balance] active:text-sky-100 hover:underline"
                >
                  {content}
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
