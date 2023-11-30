import BackPreviousButton from "@/components/dashboard/back-previour-button";
import AddQuestionForm from "@/components/dashboard/interview-edit-card/add-question-form";

const AddQuestionPage = () => {
  return (
    <div className="space-y-10">
      <BackPreviousButton>&laquo; back to interview setup</BackPreviousButton>
      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Question</h1>

        <AddQuestionForm />
      </div>
    </div>
  );
};

export default AddQuestionPage;
