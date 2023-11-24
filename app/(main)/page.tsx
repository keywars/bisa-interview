import Hero from "@/components/hero";
import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <section className="min-h-[47dvh] bg-lime-400/40">features</section>
    </div>
  );
};

export default MainPage;
