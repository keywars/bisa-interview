import Header from "@/components/header";
import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "News | Bisa Interview",
  description: "News about bisa interview.",

  openGraph: {
    title: "News | Bisa Interview",
    description: "News about bisa interview.",
    url: "http://localhost:3000/news",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-3 space-y-5">
        <Header
          title="News"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, impedit?"
        />

        <div>content news</div>
      </div>
    </div>
  );
};

export default NewsPage;
