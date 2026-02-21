import EthosSection from "@/sections/EthosSection";
import FAQ from "@/sections/FAQ";
import ShowcaseTrusted from "@/sections/ShowcaseTrusted";

import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import Footer from "@/components/Footer";
import ContactUs from "@/sections/ContactUs";
import InvestmentFocusSection from "@/sections/InvestmentFocusSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-[50px] sm:gap-[70px]">

      <HeroSection />


      <ShowcaseTrusted />

      <EthosSection />

      <InvestmentFocusSection />

      <PortfolioSection />

      <ContactUs />



      {/* <FAQ /> */}


      <Footer />

    </div>
  );
}
