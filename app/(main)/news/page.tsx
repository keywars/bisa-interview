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

const dummyBlogs = [
  {
    title: "tips for successful interview",
    author: "Moh. ilhamuddin",
    publishedAt: "06/02/2022",
  },
  {
    title: "how to make a greet impression in a job interview: 20 tips",
    author: "samsul rahmatullah",
    publishedAt: "04/23/2022",
  },
  {
    title: "6 interview skills that will get you hired",
    author: "laeny syahrunnisa",
    publishedAt: "08/31/2023",
  },
  {
    title: "job interview preparation tips to help you stand out",
    author: "arman dani agustia",
    publishedAt: "01/02/2024",
  },
  {
    title:
      "fresh off passing google and microsoft interviews, i put together an free, opinionated interview guide that i hope can help you",
    author: "raudatul aini",
    publishedAt: "01/10/2024",
  },
  {
    title: "4 super helpful programming mock interviews platforms",
    author: "rizka hidayati alwi",
    publishedAt: "01/11/2024",
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-3 space-y-5">
        <Header
          title="Latest News"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, impedit?"
        />

        <div className="max-w-screen-md mx-auto py-3">
          <div className="flex flex-col space-y-6">
            {dummyBlogs.map((blog, index) => (
              <NewsCard key={index} blog={blog} />
            ))}
          </div>

          {/* pagination navigation */}
          <div className="flex space-x-4 justify-center my-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "py-1.5 px-3 text-xs rounded-full border hover:cursor-pointer border-sky-500/80",
                  index === 0 && "bg-sky-200"
                )}
              >
                {index + 1}
              </div>
            ))}
          </div>
          {/* end pagination navigation */}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
