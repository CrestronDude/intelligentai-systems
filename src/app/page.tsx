import Hero from "@/components/home/Hero";
import RoomJourney from "@/components/home/RoomJourney";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyUs from "@/components/home/WhyUs";
import AIToolsSection from "@/components/home/AIToolsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <RoomJourney />
      <TrustBar />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyUs />
      <AIToolsSection />
      <FinalCTA />
    </>
  );
}
