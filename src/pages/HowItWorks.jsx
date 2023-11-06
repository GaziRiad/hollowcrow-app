import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import HowDoesItWork from "../components/HowDoesItWork";
import TrustedBySection from "../components/TrustedBySection";
import PageTransition from "../components/PageTransition";

import useContentHowItWorks from "../hooks/useContentHowItWorks";

import footerImg from "../assets/footer-img.png";

function HowItWorks() {
  const content = useContentHowItWorks();
  return (
    <PageTransition>
      <Hero img={content.heroImg} />
      <div className=" text-center text-lg md:text-xl lg:text-2xl flex flex-col gap-4 mb-12 lg:mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <HowDoesItWork />
      <Heading type="tag">#BeyondWatching</Heading>
      <CardsSection />
      <TrustedBySection />
      <Footer icon={footerImg} type="normal" />
    </PageTransition>
  );
}

export default HowItWorks;
