import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

const Filter = () => {
  return (
    <div className="p-2 items-center flex flex-col-reverse md:flex-row gap-4 justify-between">
      <div className="flex space-x-3">
        <Select defaultValue="name">
          <SelectTrigger className="w-[154px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="tag">Tag</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="desc">
          <SelectTrigger className="w-[154px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">ASC</SelectItem>
            <SelectItem value="desc">DESC</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Input
        type="search"
        placeholder="Search..."
        className="w-full md:w-auto"
      />
    </div>
  );
};

export default Filter;
