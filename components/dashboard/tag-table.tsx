import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "@/db/schema";
import TablerSearch from "../icons/TablerSearch";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import TagsTableAction from "./tags-table-action";

interface TagTableProps {
  tags: Tag[] | null;
}

const TagTable = ({ tags }: TagTableProps) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-4">
        <div className="flex items-center space-x-1">
          <Input placeholder="Search by name..." type="search" className="" />
          <Button className="" variant="outline">
            <TablerSearch />
          </Button>
        </div>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tags?.map((tag, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{tag.id}</TableCell>
              <TableCell>{tag.slug}</TableCell>
              <TableCell>{tag.name}</TableCell>
              <TableCell>
                <TagsTableAction id={tag.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TagTable;
