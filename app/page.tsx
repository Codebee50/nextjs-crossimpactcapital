import Nav from "@/components/Nav";
import EthosSection from "@/sections/EthosSection";
import FAQ from "@/sections/FAQ";
import InvestmentFocus from "@/sections/InvestmentFocus";
import ShowcaseTrusted from "@/sections/ShowcaseTrusted";

import HeroSection from "@/sections/HeroSection";
import OurPortfolio from "@/sections/OurPortfolio";
import PortfolioSection from "@/sections/PortfolioSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-[150px]">

      {/* <Nav /> */}
      <HeroSection />
      {/* <HeroSection /> */}

      {/* <OurHeroSection /> */}
      {/* <Hero /> */}
      <ShowcaseTrusted />

      {/* <ShowcaseStats /> */}
      <EthosSection />
      {/* <OurInvestmentFocus /> */}
      {/* <InvestmentFocus /> */}

      <PortfolioSection />

      {/* <OurPortfolio /> */}


      <FAQ />

      <div className="w-full h-screen">

      </div>

    </div>
  );
}
