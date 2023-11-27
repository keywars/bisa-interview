import Breadcrumbs from "@/components/breadcrumbs";
import Explanation from "@/components/explanation";
import InterviewNavigator from "@/components/interview-navigator";

interface DetailInterviewPageProps {
  params: {
    slug: string;
  };
}

const DetailInterviewPage = ({
  params: { slug },
}: DetailInterviewPageProps) => {
  const menus = ["collectionId", slug];

  return (
    <div className="max-w-screen-2xl mx-auto px-3 h-[87dvh]">
      <div className="py-5 flex flex-col justify-between h-full space-y-14">
        <div className="space-y-10">
          <Breadcrumbs menus={menus} />

          <div className="space-y-5">
            <h2 className="text-2xl mg:text-3xl font-bold capitalize">
              How to call constructor from the other constructor?
            </h2>

            <Explanation />
          </div>
        </div>

        <InterviewNavigator />
      </div>
    </div>
  );
};

export default DetailInterviewPage;
