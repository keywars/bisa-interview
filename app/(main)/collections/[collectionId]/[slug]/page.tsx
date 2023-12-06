import Breadcrumbs from "@/components/breadcrumbs";
import Explanation from "@/components/explanation";
import InterviewNavigator from "@/components/interview-navigator";
import getQuestionBySlug from "@/actions/question/get-question-by-slug";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DetailInterviewPageProps {
  params: {
    slug: string;
  };
}

const DetailInterviewPage = async ({
  params: { slug },
}: DetailInterviewPageProps) => {
  const question = await getQuestionBySlug(slug);

  const menus = ["collectionId", slug];

  return (
    <div className="max-w-screen-2xl mx-auto px-1 min-h-[87dvh]">
      <div className="py-5 flex flex-col justify-between h-full space-y-14">
        <div className="space-y-10">
          <Breadcrumbs menus={menus} />

          <div className="space-y-10">
            <div className="prose prose-md capitalize">
              <Markdown remarkPlugins={[remarkGfm]}>
                {question?.inquiry}
              </Markdown>
            </div>

            <Explanation answer={question?.answer as string} />
          </div>
        </div>

        <InterviewNavigator />
      </div>
    </div>
  );
};

export default DetailInterviewPage;
