import React from "react";

interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return <div>{children}</div>;
};

export default AuthenticationLayout;
