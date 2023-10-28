import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PlatformOverview from "../components/PlatformOverview";
import SlidersSection from "../components/SlidersSection";
import Statics from "../components/Statics";
import Testimonials from "../components/Testimonials";

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Statics />
      <HowItWorks />
      <SlidersSection />
      <PlatformOverview />
      <Testimonials />
    </>
  );
}

export default Landing;
