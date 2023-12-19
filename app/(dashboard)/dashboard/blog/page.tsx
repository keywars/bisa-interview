import Breadcrumbs from "@/components/breadcrumbs";
import MdiPlusCircleOutline from "@/components/icons/MdiPlusCircleOutline";
import TablerSearch from "@/components/icons/TablerSearch";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import getPosts from "@/actions/blog/get-posts";
import BlogsTable from "@/components/dashboard/blogs-table";

const BlogDashboardPage = async () => {
  const posts = (await getPosts()) as {
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

        <BlogsTable posts={posts} />
      </div>
    </div>
  );
};

export default BlogDashboardPage;
