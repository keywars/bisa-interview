import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

interface UserProfileLayoutProps {
  children: React.ReactNode;
}

// TODO: RESPONSIVE DASHBOARD
const UserProfileLayout = ({ children }: UserProfileLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 min-w-0 overflow-auto flex flex-col">
        <Navbar />
        <main className="p-7">{children}</main>
      </div>
    </div>
  );
};

export default UserProfileLayout;
