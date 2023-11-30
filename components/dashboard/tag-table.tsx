import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MdiPlusCircleOutline from "../icons/MdiPlusCircleOutline";
import Search from "../search";
import TablerSearch from "../icons/TablerSearch";

const TagTable = () => {
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
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$50.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TagTable;
