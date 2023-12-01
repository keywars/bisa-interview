import FrequentlyAsking from "@/components/frequently-asking";
import Hero from "@/components/hero";
import InterviewGrid from "@/components/interview-grid";
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

const MainPage = () => {
  return (
    <div>
      <Hero />
      <StatisticSection />
      <InterviewGrid />
      {/* <Testimonials /> */}
      <FrequentlyAsking />
    </div>
  );
};

export default MainPage;
