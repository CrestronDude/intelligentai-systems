import Hero from "@/components/home/Hero";
import RoomJourney from "@/components/home/RoomJourney";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import Assurance from "@/components/home/Assurance";
import AIToolsSection from "@/components/home/AIToolsSection";
import MarineAudioPromo from "@/components/home/MarineAudioPromo";
import FAQ from "@/components/home/FAQ";
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
      <Testimonials />
      <Assurance />
      <AIToolsSection />
      <MarineAudioPromo />
      <FAQ />
      <FinalCTA />
    </>
  );
}
