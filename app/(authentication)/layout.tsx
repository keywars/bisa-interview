import Container from "@/components/container";
import React from "react";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Container>{children}</Container>
    </div>
  );
};

export default AuthenticationLayout;
