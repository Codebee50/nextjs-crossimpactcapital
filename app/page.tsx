import Nav from "@/components/Nav";
import EthosSection from "@/sections/EthosSection";
import FAQ from "@/sections/FAQ";
import InvestmentFocus from "@/sections/InvestmentFocus";
import ShowcaseTrusted from "@/sections/ShowcaseTrusted";

import HeroSection from "@/sections/HeroSection";
import OurPortfolio from "@/sections/OurPortfolio";
import PortfolioSection from "@/sections/PortfolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-[50px] sm:gap-[70px]">

      <HeroSection />


      <ShowcaseTrusted />

      <EthosSection />


      <InvestmentFocus />



      <PortfolioSection />



      <FAQ />

 
      <Footer />

    </div>
  );
}
