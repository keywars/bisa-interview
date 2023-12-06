import React from "react";
import countQuestion from "@/actions/interview/count-question";

interface QuestionCountProps {
  interviewId: string;
}

async function QuestionCount({ interviewId }: QuestionCountProps) {
  const total = await countQuestion(interviewId);

  return <span>{total.at(0)?._count}</span>;
}

export default QuestionCount;
