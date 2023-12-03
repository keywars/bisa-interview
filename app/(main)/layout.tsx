import getCurrentUser from "@/actions/user/get-current-user";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <Navbar className="py-5 bg-background" currentUser={currentUser} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
