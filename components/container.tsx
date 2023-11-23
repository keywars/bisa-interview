import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4">
      {children}
    </div>
  );
};

export default Container;
