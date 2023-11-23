import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Link href="/signin" className={buttonVariants({ variant: "outline" })}>
        Login
      </Link>
    </div>
  );
};

export default MainPage;
