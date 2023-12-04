"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import MdiDelete from "../icons/MdiDelete";
import MdiDotsHorizontal from "../icons/MdiDotsHorizontal";
import MdiPencil from "../icons/MdiPencil";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface InterviewTableActionProps {
  id: string | number;
}

const InterviewTableAction = ({ id }: InterviewTableActionProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleDeleteAction = () => {
    startTransition(async () => {
      await fetch(`/api/interview/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          toast({
            title: "Delete Interview",
            description: "Delete interview successfully",
          });
          router.refresh();
        })
        .catch((error) => {
          toast({
            variant: "destructive",
            title: "Delete Interview",
            description: "Delete interview error",
          });
        });
    });
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

export default InterviewTableAction;
