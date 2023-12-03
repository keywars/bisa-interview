import getCurrentUser from "@/actions/user/get-current-user";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = async ({
  children,
}: AuthenticationLayoutProps) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="min-h-screen">
      <Navbar
        className="absolute top-5 left-0 py-5 w-full bg-background"
        currentUser={currentUser}
      />
      {children}
      <Footer />
    </div>
  );
};

export default AuthenticationLayout;
