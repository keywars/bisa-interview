import Breadcrumbs from "@/components/breadcrumbs";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TagForm from "@/components/dashboard/tag-form";
import TagTable from "@/components/dashboard/tag-table";

const TagsDashboardPage = () => {
  return (
    <div className="space-y-10">
      {/* TODO: breadcrumbs fix */}
      <Breadcrumbs menus={["dashboard", "tags"]} />

      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Tags</h1>

        <div className="flex space-x-7">
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <h1 className="font-lg font-bold">Create new tag</h1>
              </CardHeader>
              <CardContent>
                <TagForm />
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <TagTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsDashboardPage;
