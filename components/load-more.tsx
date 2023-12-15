"use client";

import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { InterviewWithTag } from "@/typings";
import { usePaginationContext } from "@/context/pagination-context";
import getPublishedInterview from "@/actions/interview/get-published-interview";
import InterviewCard from "@/components/interview-card";

function LoadMore() {
  // @ts-ignore
  const { currentPage, setCurrentPage } = usePaginationContext();

  const [interviews, setInterviews] = useState<InterviewWithTag[]>();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    const loadMoreInterview = async () => {
      const nextPage = currentPage + 1;

      const newInterviews = await getPublishedInterview({
        page: currentPage,
      });

      if (newInterviews.length) {
        setInterviews((interviews) => newInterviews);
        setCurrentPage((currentPage: number) => currentPage + 1);
      }
    };

    if (entry?.isIntersecting) {
      loadMoreInterview();
    }
  }, [entry?.isIntersecting]);

  return (
    <>
      {interviews?.map((interview, index) => (
        <InterviewCard index={index} interview={interview} key={index} />
      ))}

      <div className="col-span-3 bg-rose-300" ref={ref}>
        <p className="animate-pulse text-center text-gray-700 dark:text-gray-200">
          Load more....
        </p>
      </div>
    </>
  );
}

export default LoadMore;
