import Breadcrumbs from "@/components/breadcrumbs";
import AddNewInterviewDialog from "@/components/dashboard/add-new-interview-dialog";
import TablerSearch from "@/components/icons/TablerSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InterviewsPage = () => {
  return (
    <div className="space-y-10">
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

        <Table>
          <TableCaption>A list of your recent dummy invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="w-[200px]">Status</TableHead>
              <TableHead className="text-right">Total Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="capitalize">
                top 50 intermediate python interview questions
              </TableCell>
              <TableCell>
                <Badge className="bg-emerald-500/80">published</Badge>
              </TableCell>
              <TableCell className="text-right">50</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell className="capitalize">
                leetcode interview questions
              </TableCell>
              <TableCell>
                <Badge variant="destructive">not published</Badge>
              </TableCell>
              <TableCell className="text-right">12</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell className="capitalize">
                SQL quick revision notes for interview
              </TableCell>
              <TableCell>
                <Badge className="bg-emerald-500/80">published</Badge>
              </TableCell>
              <TableCell className="text-right">128</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InterviewsPage;
