import { Interview } from "@/db/schema";
import Link from "next/link";
import React from "react";

interface HeroProps {
  newestInterview: Interview | null;
}

const Hero = ({ newestInterview }: HeroProps) => {
  return (
    <section className="min-h-[55dvh] lg:min-h-[48dvh] flex justify-center items-center py-5">
      <div className="text-center space-y-9 lg:space-y-12">
        {newestInterview ? (
          <div>
            <span className="border-2 py-2 px-4 lg:px-16 rounded-md border-dashed border-[#C683D7] text-violet-500 text-sm lg:text-base shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]">
              <span className="font-black text-violet-700 xs:text-sm sm:text-lg mr-3">
                New
              </span>{" "}
              {newestInterview?.title}{" "}
              <Link
                aria-label="View collection details"
                href={`/collections/${newestInterview?.id}`}
                className="font-bold underline"
              >
                check out
              </Link>
            </span>
          </div>
        ) : null}

        <div className="max-w-4xl space-y-4 lg:space-y-2.5">
          <h1 className="text-4xl lg:text-6xl font-bold capitalize bg-gradient-to-tl from-slate-800 via-[#C683D7] to-zinc-400 bg-clip-text text-transparent">
            bisa interview
          </h1>
          <p className="text-base lg:text-lg tracking-wide text-gray-700 font-light px-3.5 [text-wrap:balance]">
            <span className="font-medium capitalize leading-relaxed">
              bisa interview
            </span>{" "}
            designed to help job seekers and developers brush up on their
            knowledge before an interview
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
