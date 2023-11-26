import MobileContentTable from "@/components/mobile-content-table";
import Sidebar from "@/components/sidebar";
import React from "react";

interface CollectionDetailLayoutProps {
  children: React.ReactNode;
}

const CollectionDetailLayout = ({ children }: CollectionDetailLayoutProps) => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto px-3 flex flex-col lg:flex-row lg:space-x-7">
        <Sidebar />
        <MobileContentTable />
        <main className="flex-1 min-w-0 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default CollectionDetailLayout;
