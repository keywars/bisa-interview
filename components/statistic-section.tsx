"use client";

import React from "react";
import CountUp from "react-countup";

const dummyStatistics = [
  {
    label: "question",
    total: 1430,
  },
  {
    label: "interview",
    total: 120,
  },
  {
    label: "tags",
    total: 23,
  },
];

const StatisticSection = () => {
  return (
    <section className="min-h-[78dvh] lg:min-h-[29dvh] bg-zinc-50/50 flex items-center">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-3 gap-y-20 lg:gap-x-16 items-center px-3">
        {dummyStatistics.map((data, index) => (
          <div
            key={index}
            className="aspect-video flex justify-center items-center rounded-md"
          >
            <div className="text-center space-y-3">
              <div>
                <CountUp
                  end={data.total}
                  duration={3}
                  start={0}
                  className="font-extrabold text-5xl md:text-5xl text-violet-600/50"
                />
              </div>
              <h1 className="font-semibold text-3xl md:text-xl capitalize text-gray-500">
                {data.label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticSection;
