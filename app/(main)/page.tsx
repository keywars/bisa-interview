import countInterviews from "@/actions/interview/count-interviews";
import getNewestInterview from "@/actions/interview/get-newest-interview";
import getPublishedInterview from "@/actions/interview/get-published-interview";
import countQuestions from "@/actions/question/count-questions";
import countTag from "@/actions/tags/count-tags";
import Hero from "@/components/hero";
import StatisticSection from "@/components/statistic-section";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Bisa Interview",
  description: "Homepage. Collections of interview question.",
  openGraph: {
    title: "Bisa Interview",
    description: "Homepage. Collections of interview question.",
    // url: "http://localhost:3000/",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const MainPage = async () => {
  const [
    publishedInterviews,
    totalInterview,
    totalQuestions,
    totalTag,
    newestInterview,
  ] = await Promise.all([
    getPublishedInterview({ page: 0 }),
    countInterviews(),
    countQuestions(),
    countTag(),
    getNewestInterview(),
  ]);

  return (
    <div className="relative">
      <Hero newestInterview={newestInterview} />
      <StatisticSection
        totalInterview={totalInterview.at(0)?._count as number}
        totalQuestion={totalQuestions.at(0)?._count as number}
        totalTag={totalTag.at(0)?._count as number}
      />

      <div className="absolute right-56 top-14 h-56 w-56 rounded-full bg-gradient-to-l from-purple-600 via-white to-lime-400 opacity-50 blur-2xl dark:from-purple-800 dark:to-lime-800" />
      <div className="to-emerald-600-400 absolute left-32 top-14 h-32 w-32 rounded-full bg-gradient-to-l from-sky-400 via-purple-400 opacity-50 blur-lg dark:from-sky-800 dark:via-purple-800" />
      <div className="absolute left-1/2 top-1/2 h-60 w-96 rounded-full bg-gradient-to-l from-pink-500 via-gray-400 to-white opacity-50 blur-3xl dark:from-pink-800 dark:via-gray-600" />

      {/*<InterviewGrid publishedInterviews={publishedInterviews} />*/}
      {/* <Testimonials /> */}
      {/*<FrequentlyAsking />*/}
    </div>
  );
};

export default MainPage;
