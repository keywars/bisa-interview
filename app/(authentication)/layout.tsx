import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar className="absolute top-5 left-0 w-full" />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default AuthenticationLayout;
