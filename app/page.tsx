import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import ShowcaseStats from "@/sections/ShowcaseStats";
import Image from "next/image";
import EthosSection from "@/sections/EthosSection";
import FAQ from "@/sections/FAQ";
import InvestmentFocus from "@/sections/InvestmentFocus";
import OurInvestmentFocus from "@/sections/OurInvestmentFocus";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-[50px]">

      <Nav />
      <Hero />
      <ShowcaseStats />
      <EthosSection />
      {/* <OurInvestmentFocus /> */}
      <InvestmentFocus />



      <FAQ />

      <div className="w-full h-screen">

      </div>

    </div>
  );
}
