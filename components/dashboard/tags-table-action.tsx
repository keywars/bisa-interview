"use client";

import React, { useTransition } from "react";
import MdiDelete from "../icons/MdiDelete";
import MdiDotsHorizontal from "../icons/MdiDotsHorizontal";
import MdiPencil from "../icons/MdiPencil";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

interface TagsTableActionProps {
  id: number;
}

const TagsTableAction = ({ id }: TagsTableActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDeleteAction = () => {
    startTransition(async () => {});
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isPending}>
          <MdiDotsHorizontal className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link
            href={`/dashboard/interviews/${id}/edit`}
            aria-disabled={isPending}
          >
            <MdiPencil className="w-4 h-4 mr-2" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDeleteAction} disabled={isPending}>
          <MdiDelete className="w-4 h-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TagsTableAction;
