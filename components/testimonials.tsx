"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section className="min-h-[48dvh] lg:min-h-[37dvh] py-12 flex items-center text-center bg-zinc-50/50">
      {/* <h1 className="text-5xl font-bold">What people say?</h1> */}
      <Marquee className="flex h-full" speed={30}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-[329px] md:w-[430px] mx-5 bg-white p-5 rounded-md shadow-md text-start"
          >
            <div className="space-y-2.5">
              <div className="leading-tight">
                <h1 className="font-bold text-xl capitalize tracking-wide">
                  rizka hidayati alwi
                </h1>
                <span className="text-sm text-gray-600">
                  Flutter Developer at ablecode
                </span>
              </div>
              <p className="text-gray-800">
                <q>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus hic reiciendis officiis, ipsa pariatur eveniet?
                </q>
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
