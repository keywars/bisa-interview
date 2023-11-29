import Breadcrumbs from "@/components/breadcrumbs";
import BlogForm from "@/components/dashboard/blog-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AddBlogPage = () => {
  return (
    <div className="space-y-10">
      <Breadcrumbs menus={["dashboard", "blog", "add"]} />

      <div className="space-y-7">
        <h1 className="text-3xl font-bold">Add Blog Form</h1>

        <Card className="max-w-screen-md">
          <CardHeader>
            <h1 className="text-lg font-bold capitalize">add new blogpost</h1>
          </CardHeader>
          <CardContent>
            <BlogForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddBlogPage;
