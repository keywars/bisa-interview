import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[55dvh] lg:min-h-[40dvh] flex justify-center items-center py-5">
      <div className="text-center space-y-9 lg:space-y-12">
        <div>
          <span className="border-2 py-2 px-4 lg:px-16 rounded-md border-dashed border-violet-500 text-violet-500 text-sm lg:text-base">
            <span className="font-black text-violet-700 xs:text-sm sm:text-lg mr-3">
              New
            </span>{" "}
            Rust basics beginner interview.{" "}
            <Link href="#checkout" className="font-bold underline">
              check out
            </Link>
          </span>
        </div>

        <div className="max-w-5xl space-y-4 lg:space-y-2.5">
          <h1 className="text-4xl lg:text-6xl font-bold capitalize bg-gradient-to-tl from-slate-800 via-violet-400 to-zinc-400 bg-clip-text text-transparent">
            bisa interview
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 font-light [text-wrap:balance] px-3.5">
            <span className="font-medium capitalize leading-relaxed">
              bisa interview
            </span>{" "}
            lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, quibusdam error earum maxime perspiciatis est facilis
            exercitationem laudantium molestias modi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
