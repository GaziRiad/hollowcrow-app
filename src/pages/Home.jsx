import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PlatformOverview from "../components/PlatformOverview";
import SlidersSection from "../components/SlidersSection";
import Statics from "../components/Statics";
import Testimonials from "../components/Testimonials";

import { homeFooter } from "../constants";

import footerHomeIcon from "../assets/homePage/footerHomeIcon.png";

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

      <Footer icon={footerHomeIcon}>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-20 md:gap-10">
          {homeFooter.map((el) => (
            <div
              key={el.text}
              className="flex flex-col items-center justify-center gap-2 md:gap-6"
            >
              <img
                src={el.icon}
                className=" scale-75 md:scale-90 lg:scale-100"
              />
              <p className=" text-white font-semibold uppercase tracking-wide text-center lg:text-lg">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </Footer>
    </>
  );
}

export default Landing;
