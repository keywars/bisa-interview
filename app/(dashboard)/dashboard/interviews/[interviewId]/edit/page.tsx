import Breadcrumbs from "@/components/breadcrumbs";
import InterviewDescriptionCard from "@/components/dashboard/interview-edit-card/interview-description-card";
import InterviewQuestionsCard from "@/components/dashboard/interview-edit-card/interview-questions-card";
import InterviewTagCard from "@/components/dashboard/interview-edit-card/interview-tag-card";
import InterviewTitleCard from "@/components/dashboard/interview-edit-card/interview-title-card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const EditInterviewPage = () => {
  return (
    <div className="space-y-10">
      <Breadcrumbs menus={["dashboard", "interviews", "edit"]} />

      <div className="space-y-7">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Interview setup</h1>

          <div className="flex space-x-3 items-center">
            <Button size="sm" disabled>
              Publish
            </Button>

            <Link
              href="/dashboard/interviews"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              Edit later
            </Link>
          </div>
        </div>

        <Alert className="bg-amber-100/80">
          <AlertDescription>Complete all fields (1/4)</AlertDescription>
        </Alert>

        <div className="flex space-x-7">
          <div className="flex-1 space-y-5">
            <InterviewTitleCard />
            <InterviewDescriptionCard />
            <InterviewTagCard />
          </div>

          {/* right side */}
          <div className="flex-1">
            <InterviewQuestionsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInterviewPage;
