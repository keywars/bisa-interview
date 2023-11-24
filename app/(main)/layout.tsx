import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar className="py-5 bg-background" />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
