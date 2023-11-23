import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-xl tracking-wider">
      <span className="font-extralight">bisa</span>
      <span className="font-extrabold text-white bg-sky-500 p-1.5 rounded-md uppercase">
        interview
      </span>
    </Link>
  );
};

export default Logo;
