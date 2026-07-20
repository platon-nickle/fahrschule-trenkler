import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import TermineTeaser from "@/components/sections/TermineTeaser";
import TraditionSection from "@/components/sections/TraditionSection";
import AbsolventenTeaser from "@/components/sections/AbsolventenTeaser";
import FAQSection from "@/components/sections/FAQSection";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TimelineSection />
      <TermineTeaser />
      <TraditionSection />
      <AbsolventenTeaser />
      <FAQSection />
      <ClosingCTA />
    </>
  );
}
