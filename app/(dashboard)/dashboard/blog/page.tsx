import Breadcrumbs from "@/components/breadcrumbs";
import MdiPlusCircleOutline from "@/components/icons/MdiPlusCircleOutline";
import TablerSearch from "@/components/icons/TablerSearch";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import React from "react";
import getPosts from "@/actions/blog/get-posts";
import BlogTableAction from "@/components/dashboard/blog-table-action";
import { cn } from "@/lib/utils";

const BlogDashboardPage = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-10">
      {/* TODO: breadcrumbs fix */}
      <Breadcrumbs menus={["dashboard", "blog"]} />

      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="flex items-center justify-between space-x-5">
          <div className="flex w-[327px] items-center space-x-1.5">
            <Input
              className="h-10 w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0"
              type="search"
              placeholder="Search by name..."
            />
            <Button className="h-10" variant="outline">
              <TablerSearch className="h-5 w-5 fill-gray-600" />
            </Button>
          </div>

          <Link
            href="/dashboard/blog/add"
            aria-label="Go to blog creation page"
            className={buttonVariants({
              variant: "outline",
              className: "h-10 capitalize",
              size: "sm",
            })}
          >
            <MdiPlusCircleOutline className="h-5 w-5 md:mr-2" />
            <span className="hidden md:flex">Add Blog</span>
          </Link>
        </div>

        <Table>
          <TableCaption>
            {!posts?.length ? "Article is empty." : "List of Articles"}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts?.map((post, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="capitalize">{post.title}</TableCell>
                <TableCell>{post.content}</TableCell>
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
                  <BlogTableAction />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogDashboardPage;
