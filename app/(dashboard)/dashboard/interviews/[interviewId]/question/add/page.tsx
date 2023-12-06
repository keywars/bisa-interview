import BackPreviousButton from "@/components/dashboard/back-previour-button";
import AddQuestionForm from "@/components/dashboard/interview-edit-card/add-question-form";
import countQuestion from "@/actions/interview/count-question";

const AddQuestionPage = async ({
  params: { interviewId },
}: {
  params: { interviewId: string };
}) => {
  const totalQuestion = await countQuestion(interviewId);

  return (
    <div className="space-y-10">
      <BackPreviousButton>&laquo; back to interview setup</BackPreviousButton>
      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Question</h1>

        <AddQuestionForm
          interviewId={interviewId}
          totalQuestion={totalQuestion.at(0)?._count as number}
        />
      </div>
    </div>
  );
};

export default AddQuestionPage;
