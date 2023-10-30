import CardsSection from "../components/CardsSection";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import HowDoesItWork from "../components/HowDoesItWork";
import useContentHowItWorks from "../hooks/useContentHowItWorks";

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
    </>
  );
}

export default HowItWorks;
