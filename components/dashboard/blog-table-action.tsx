"use client";

import React, { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import MdiDotsHorizontal from "../icons/MdiDotsHorizontal";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

interface BlogTableActionProps {
  postId: string;
}

function BlogTableAction({ postId }: BlogTableActionProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDeleteBlog = () => {
    startTransition(async () => {
      await fetch(`/api/blogs/${postId}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          toast({
            title: "Delete Blog",
            description: "Delete blog successfully!!!",
          });

          router.refresh();
        } else {
          toast({
            title: "Delete Blog",
            variant: "destructive",
            description: "Failed to delete blog",
          });
        }
      });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MdiDotsHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={isPending}
          onClick={() => console.log("edit blog")}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem disabled={isPending} onClick={handleDeleteBlog}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default BlogTableAction;
