"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

interface BackPreviousButtonProps {
  children: React.ReactNode;
}

const BackPreviousButton = ({ children }: BackPreviousButtonProps) => {
  const router = useRouter();
  return (
    <Button variant="link" onClick={() => router.back()}>
      {children}
    </Button>
  );
};

export default BackPreviousButton;
