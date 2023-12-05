import getQuestionById from "@/actions/question/get-question-by-id";
import BackPreviousButton from "@/components/dashboard/back-previour-button";
import EditQuestionForm from "@/components/dashboard/interview-edit-card/edit-question-form";
import React from "react";

interface QuestionEditPageProps {
  params: {
    id: string;
  };
}

const QuestionEditPage = async ({ params: { id } }: QuestionEditPageProps) => {
  const question = await getQuestionById(Number(id));

  return (
    <div className="space-y-10">
      <BackPreviousButton>&laquo; Go to previous page</BackPreviousButton>
      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Question</h1>

        <EditQuestionForm initialValues={question} id={id} />
      </div>
    </div>
  );
};

export default QuestionEditPage;
