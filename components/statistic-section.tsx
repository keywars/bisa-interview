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
    <section className="min-h-[78dvh] lg:min-h-[29dvh] bg-zinc-50/50 dark:bg-zinc-800 flex items-center">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-3 gap-y-20 lg:gap-x-16 items-center px-3">
        {statistics.map((data, index) => (
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
                  className="font-extrabold text-5xl md:text-5xl text-violet-600/50 dark:text-violet-500"
                />
              </div>
              <h1 className="font-semibold text-3xl md:text-xl capitalize text-gray-500 dark:text-gray-200">
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
