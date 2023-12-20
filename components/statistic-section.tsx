"use client";

import React, { useState } from "react";
import CountUp from "react-countup";

interface StatisticSectionProps {
  totalInterview: number;
  totalQuestion: number;
  totalTag: number;
}

const StatisticSection = ({
  totalInterview,
  totalQuestion,
  totalTag,
}: StatisticSectionProps) => {
  const [statistics, setStatistics] = useState([
    {
      label: "question",
      total: totalQuestion,
    },
    {
      label: "interview",
      total: totalInterview,
    },
    {
      label: "tags",
      total: totalTag,
    },
  ]);

  return (
    <section className="flex min-h-[78dvh] items-center bg-zinc-50/50 dark:bg-zinc-900/70 lg:min-h-[29dvh]">
      <div className="mx-auto grid max-w-screen-lg items-center gap-y-20 px-3 md:grid-cols-3 lg:gap-x-16">
        {statistics.map((data, index) => (
          <div
            key={index}
            className="flex aspect-video items-center justify-center rounded-md"
          >
            <div className="space-y-3 text-center">
              <div>
                <CountUp
                  end={data.total}
                  duration={3}
                  start={0}
                  className="text-5xl font-extrabold text-violet-600/50 dark:text-violet-500 md:text-5xl"
                />
              </div>
              <h1 className="text-3xl font-semibold capitalize text-gray-500 dark:text-gray-200 md:text-xl">
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
