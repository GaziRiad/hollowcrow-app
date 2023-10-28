import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PlatformOverview from "../components/PlatformOverview";
import SlidersSection from "../components/SlidersSection";
import Statics from "../components/Statics";

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Statics />
      <HowItWorks />
      <SlidersSection />
      <PlatformOverview />
    </>
  );
}

export default Landing;
