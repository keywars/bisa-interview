import MobileContentTable from "@/components/mobile-content-table";
import Sidebar from "@/components/sidebar";
import React from "react";
import getQuestionsByInterviewId from "@/actions/question/get-questions-by-interviewId";

interface CollectionDetailLayoutProps {
  children: React.ReactNode;
  params: {
    collectionId: string;
  };
}

const CollectionDetailLayout = async ({
  children,
  params: { collectionId },
}: CollectionDetailLayoutProps) => {
  const questions = await getQuestionsByInterviewId(collectionId);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-3 flex flex-col lg:flex-row lg:space-x-7">
        <Sidebar questions={questions} collectionId={collectionId} />
        <MobileContentTable questions={questions} collectionId={collectionId} />

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

export default CollectionDetailLayout;
