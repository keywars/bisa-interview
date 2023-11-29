import MdiPlusCircleOutline from "@/components/icons/MdiPlusCircleOutline";
import TablerPencil from "@/components/icons/TablerPencil";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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

const InterviewQuestionsCard = () => {
  return (
    <Card className="bg-gray-50">
      <CardHeader className="flex flex-row items-center space-y-0 justify-between">
        <h1 className="text-lg font-semibold">Interview title</h1>
        <Link
          href="/dashboard/interviews/1234-abcd/question/add"
          className={buttonVariants({ size: "sm" })}
        >
          <MdiPlusCircleOutline className="mr-2 w-5 h-5" />
          Add question
        </Link>
      </CardHeader>
      <CardContent className="rounded-md">
        <ScrollArea className="h-[400px] rounded-md">
          {tableOfContent.map((content, index) => (
            <div
              key={index}
              className="py-2 pl-4 pr-2 flex items-center h-[50px] rounded-md bg-gray-200/50"
            >
              <p className="flex-1 capitalize font-semibold text-gray-700/80 line-clamp-1 text-sm font-sans">
                {content}
              </p>
              <Button size="sm" className="w-[50px]" variant="ghost">
                <TablerPencil className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default InterviewQuestionsCard;
