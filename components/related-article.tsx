import React from "react";
import NewsCard from "./news-card";

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

const RelatedArticle = () => {
  return (
    <div className="border-t py-12 mt-16">
      <h3 className="text-3xl pl-2 font-bold pb-7">Related Articles</h3>
      <div className="space-y-4 border-l-2 border-violet-500/50 ml-3 pl-8">
        {dummyBlogs.slice(0, 4).map((blog, index) => (
          <NewsCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticle;
