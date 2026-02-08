import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import ShowcaseStats from "@/sections/ShowcaseStats";
import Image from "next/image";
import EthosSection from "@/sections/EthosSection";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-[50px]">

      <Nav />
      <Hero />
      <ShowcaseStats />
      <EthosSection />

      <div className="w-full h-screen">

      </div>

      <FAQ />

      <div className="w-full h-screen">

      </div>

    </div>
  );
}
