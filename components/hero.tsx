import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[55dvh] lg:min-h-[48dvh] flex justify-center items-center py-5">
      <div className="text-center space-y-9 lg:space-y-12">
        <div>
          <span className="border-2 py-2 px-4 lg:px-16 rounded-md border-dashed border-[#C683D7] text-violet-500 text-sm lg:text-base shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]">
            <span className="font-black text-violet-700 xs:text-sm sm:text-lg mr-3">
              New
            </span>{" "}
            Rust basics beginner interview.
            {/* TODO: update aria label */}
            <Link
              aria-label="View collection details"
              href="/collections/iiadas-123jasda-9as"
              className="font-bold underline"
            >
              check out
            </Link>
          </span>
        </div>

        <div className="max-w-4xl space-y-4 lg:space-y-2.5">
          <h1 className="text-4xl lg:text-6xl font-bold capitalize bg-gradient-to-tl from-slate-800 via-[#C683D7] to-zinc-400 bg-clip-text text-transparent">
            bisa interview
          </h1>
          <p className="text-base lg:text-lg tracking-wide text-gray-700 font-light px-3.5 [text-wrap:balance]">
            <span className="font-medium capitalize leading-relaxed">
              bisa interview
            </span>{" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ab
            possimus, ipsa dignissimos corporis ipsum odio qui, deleniti ut
            vitae in!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
