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
      <div className="flex space-x-2 items-center text-sm font-light">
        <span>Latest</span>
        <Switch
          onCheckedChange={(checked) => {
            router.push(
              pathname +
                "?" +
                createQueryString("sort", checked ? "asc" : "desc")
            );
          }}
        />
        <span>Oldest</span>
      </div>
    </div>
  );
};

export default Filter;
