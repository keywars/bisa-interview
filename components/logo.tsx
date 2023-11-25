import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-base lg:text-xl tracking-wider">
      <span className="font-extralight">bisa</span>
      <span className="text-white font-black bg-[#7071E8] p-1.5 rounded-md uppercase">
        interview
      </span>
    </Link>
  );
};

export default Logo;
