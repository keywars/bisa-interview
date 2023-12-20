import getPosts from "@/actions/blog/get-posts";
import Header from "@/components/header";
import NewsCard from "@/components/news-card";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Bisa Interview",
  description: "News about bisa interview.",
  openGraph: {
    title: "News | Bisa Interview",
    description: "News about bisa interview.",
    // url: "http://localhost:3000/news",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const BlogPage = async () => {
  const posts = (await getPosts({ status: "published" })) as {
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
    <div className="min-h-screen">
      <div className="mx-auto max-w-screen-xl space-y-5 px-3">
        <Header
          title="Latest Blogs"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, impedit?"
        />

        <div className="mx-auto max-w-screen-md py-3">
          {!posts?.length ? (
            <div className="text-center">
              <p className="capitalize text-rose-500">no posts</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col space-y-6">
                {posts?.map((post, index) => (
                  <NewsCard key={index} post={post} />
                ))}
              </div>

              {/* pagination navigation */}
              <div className="my-12 flex justify-center space-x-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-full border border-sky-500/80 px-3 py-1.5 text-xs hover:cursor-pointer",
                      index === 0 && "bg-sky-200",
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              {/* end pagination navigation */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
