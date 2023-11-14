import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import HowDoesItWork from "../components/HowDoesItWork";
import TrustedBySection from "../components/TrustedBySection";
import PageTransition from "../components/PageTransition";

import useContent from "../hooks/useContent";

import footerImg from "../assets/footer-img.png";
import Loader from "../ui/Loader";

function HowItWorks() {
  const { content } = useContent();

  if (!content) return <Loader />;
  return (
    <PageTransition>
      <Hero img={content.heroImg} />
      <div className=" text-center text-lg md:text-xl lg:text-2xl flex flex-col gap-4 mb-12 lg:mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <HowDoesItWork content={content} />
      <Heading type="tag">#BeyondWatching</Heading>
      <CardsSection content={content} />
      <TrustedBySection content={content} />
      <Footer icon={footerImg} type="normal" />
    </PageTransition>
  );
}

export default HowItWorks;
