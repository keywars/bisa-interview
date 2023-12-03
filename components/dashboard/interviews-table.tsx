import { type Interview } from "@/db/schema";
import Link from "next/link";
import MdiDotsHorizontal from "../icons/MdiDotsHorizontal";
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

interface InterviewsTableProps {
  interviews: Interview[] | null;
}

const InterviewsTable = ({ interviews }: InterviewsTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent dummy invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="hidden md:flex">Status</TableHead>
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
            <TableCell className="text-right">100</TableCell>
            <TableCell>
              <MdiDotsHorizontal className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InterviewsTable;
