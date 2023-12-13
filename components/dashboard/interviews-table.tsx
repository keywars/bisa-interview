import { InterivewWithAuthorAndQuestionAndTag } from "@/typings";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import InterviewTableAction from "./interview-table-action";
import QuestionCount from "@/components/dashboard/question-count";

interface InterviewsTableProps {
  interviews: InterivewWithAuthorAndQuestionAndTag[] | null;
}

const InterviewsTable = ({ interviews }: InterviewsTableProps) => {
  return (
    <Table>
      <TableCaption>
        {!!interviews?.length ? "list of interviews." : "No item"}{" "}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="hidden md:inline-flex">Status</TableHead>
          <TableHead className="text-right">Total Question</TableHead>
          <TableHead className="w-[100px]">&nbsp;</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {interviews?.map((interview, index) => (
          <TableRow key={index}>
            <TableCell className="capitalize">
              <Link
                href={`/collections/${interview.id}`}
                className="hover:underline"
              >
                <Badge
                  className="md:hidden mr-2"
                  variant={
                    interview.status === "draft" ? "destructive" : "default"
                  }
                >
                  {interview.status}
                </Badge>
                {interview.title}
              </Link>
            </TableCell>
            <TableCell className="capitalize">
              {interview.description ?? <span className="italic">Empty</span>}
            </TableCell>
            <TableCell className="hidden md:block">
              <Badge
                variant={
                  interview.status === "draft" ? "destructive" : "default"
                }
              >
                {interview.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <QuestionCount interviewId={interview.id} />
            </TableCell>
            <TableCell>
              <InterviewTableAction id={interview.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InterviewsTable;
