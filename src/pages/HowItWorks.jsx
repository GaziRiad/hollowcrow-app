import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import HowDoesItWork from "../components/HowDoesItWork";
import useContentHowItWorks from "../hooks/useContentHowItWorks";

import footerImg from "../assets/HowItWorksPage/footer-img.png";
import TrustedBySection from "../components/TrustedBySection";

function HowItWorks() {
  const content = useContentHowItWorks();
  return (
    <>
      <Hero />
      <div className=" text-center text-lg md:text-2xl flex flex-col gap-4 mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <HowDoesItWork />
      <Heading type="tag">#BeyondWatching</Heading>
      <CardsSection />
      <TrustedBySection />
      <Footer icon={footerImg} type="normal" />
    </>
  );
}

export default HowItWorks;
