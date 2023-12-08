import FrequentlyAsking from "@/components/frequently-asking";
import Hero from "@/components/hero";
import InterviewGrid from "@/components/interview-grid";
import StatisticSection from "@/components/statistic-section";
import { Metadata } from "next/types";
import getPublishedInterview from "@/actions/interview/get-published-interview";
import countInterviews from "@/actions/interview/count-interviews";
import countQuestions from "@/actions/question/count-questions";
import countTag from "@/actions/tags/count-tags";
import getNewestInterview from "@/actions/interview/get-newest-interview";

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
    getPublishedInterview({ limit: 3 }),
    countInterviews(),
    countQuestions(),
    countTag(),
    getNewestInterview(),
  ]);

  return (
    <div>
      <Hero newestInterview={newestInterview} />
      <StatisticSection
        totalInterview={totalInterview.at(0)?._count as number}
        totalQuestion={totalQuestions.at(0)?._count as number}
        totalTag={totalTag.at(0)?._count as number}
      />
      <InterviewGrid publishedInterviews={publishedInterviews} />
      {/* <Testimonials /> */}
      <FrequentlyAsking />
    </div>
  );
};

export default MainPage;
