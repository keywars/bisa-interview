"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useCallback } from "react";
import { Switch } from "@/components/ui/switch";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="p-2 items-center flex flex-col-reverse md:flex-row gap-4 justify-end">
      <div className="flex space-x-2 items-center">
        <span>Desc</span>
        <Switch
          onCheckedChange={(checked) => {
            router.push(
              pathname +
                "?" +
                createQueryString("sort", checked ? "asc" : "desc")
            );
          }}
        />
        <span>Asc</span>
      </div>

      {/* <div className="flex space-x-3">
        <Select
          defaultValue="date"
          onValueChange={(value) => {
            router.push(pathname + "?" + createQueryString("filter-by", value));
          }}
        >
          <SelectTrigger className="w-[154px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="date">Date</SelectItem>
          </SelectContent>
        </Select>

        <Select
          defaultValue="desc"
          onValueChange={(value) => {
            router.push(pathname + "?" + createQueryString("sort", value));
          }}
        >
          <SelectTrigger className="w-[154px]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">ASC</SelectItem>
            <SelectItem value="desc">DESC</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
    </div>
  );
};

export default Filter;
