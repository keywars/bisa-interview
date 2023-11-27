import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header className="border-b h-[34dvh] md:h-[22dvh] justify-center items-center flex flex-col space-y-3">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="max-w-xl text-center text-gray-600">{description}</p>
    </header>
  );
};

export default Header;
