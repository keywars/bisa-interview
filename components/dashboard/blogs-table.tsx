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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import BlogTableAction from "@/components/dashboard/blog-table-action";

interface BlogsTableProps {
  posts: {
    title: string;
    id: string;
    createdAt: Date | null;
    slug: string | null;
    status: "draft" | "published" | null;
    authorId: string | null;
    content: string;
    author: {
      id: string;
      name: string | null;
      email: string;
      password: string;
      createdAt: Date | null;
    } | null;
  }[];
}

function BlogsTable({ posts }: BlogsTableProps) {
  return (
    <Table>
      <TableCaption>
        {!posts?.length ? "Article is empty." : "List of Articles"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">No</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="w-1/3">Content</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts?.map((post, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="capitalize">{post.title}</TableCell>
            <TableCell className="line-clamp-2">{post.content}</TableCell>
            <TableCell>
              <Badge
                className={cn(
                  "capitalize",
                  post.status === "published"
                    ? "bg-emerald-500/80"
                    : "bg-rose-500/80",
                )}
              >
                {post.status}
              </Badge>
            </TableCell>
            <TableCell>
              <BlogTableAction postId={post.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BlogsTable;
