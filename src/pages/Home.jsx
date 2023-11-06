import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroMain from "../components/HeroMain";
import HowItWorks from "../components/HowItWorks";
import PlatformOverview from "../components/PlatformOverview";
import SlidersSection from "../components/SlidersSection";
import Statics from "../components/Statics";
import Testimonials from "../components/Testimonials";

import footerHomeIcon from "../assets/homeimgs/footerHomeIcon.png";
import useContent from "../hooks/useContent";

import PageTransition from "../components/PageTransition";

function Landing() {
  const { content } = useContent();

  if (!content) return <p>Loading...</p>;

  return (
    <PageTransition>
      <HeroMain />
      <Features content={content} />
      <Statics content={content} />
      <HowItWorks content={content} />
      <SlidersSection content={content} />
      <PlatformOverview content={content} />
      <Testimonials content={content} />

      <Footer icon={footerHomeIcon} type="home">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 md:mb-20 md:gap-10">
          {content.homeFooter.map((el) => (
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
    </PageTransition>
  );
}

export default Landing;
