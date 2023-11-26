import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import slugify from "@/lib/slugify";

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

const Sidebar = () => {
  return (
    <aside className="hidden lg:block w-[345px] h-[90dvh] flex-none py-5 px-2 overflow-auto">
      <ScrollArea className="h-full w-full p-4">
        <ol className="list-inside list-disc space-y-2.5">
          {tableOfContent.map((content, index) => (
            <li key={index}>
              <Link
                href={`/collections/collectionID/${slugify(content)}`}
                className="capitalize font-medium text-sm [text-wrap:balance] active:text-sky-100 hover:underline"
              >
                {content}
              </Link>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
