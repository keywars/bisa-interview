import Breadcrumbs from "@/components/breadcrumbs";
import AddNewInterviewDialog from "@/components/dashboard/add-new-interview-dialog";
import InterviewsTable from "@/components/dashboard/interviews-table";
import TablerSearch from "@/components/icons/TablerSearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InterivewWithAuthorAndQuestion } from "@/typings";

async function getInterviews() {
  const response = await fetch("http://localhost:3000/api/interview", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["interview"],
    },
  });

  if (!response.ok) {
    throw new Error("failed to fetch interview");
  }

  const { data } = await response.json();

  return data as InterivewWithAuthorAndQuestion[];
}

const InterviewsPage = async () => {
  const interviews = await getInterviews();

  return (
    <div className="space-y-5 md:space-y-10">
      {/* TODO: breadcrumbs fix */}
      <Breadcrumbs menus={["dashboard", "interviews"]} />

      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Interviews</h1>
        <div className="flex justify-between items-center space-x-5">
          <div className="flex items-center space-x-1.5 w-[327px]">
            <Input
              className="h-10 w-full focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-offset-0"
              type="search"
              placeholder="Search by name..."
            />
            <Button className="h-10" variant="outline">
              <TablerSearch className="w-5 h-5 fill-gray-600" />
            </Button>
          </div>
          <AddNewInterviewDialog />
        </div>

        <InterviewsTable interviews={interviews} />
      </div>
    </div>
  );
};

export default InterviewsPage;
