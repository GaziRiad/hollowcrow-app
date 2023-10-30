import Heading from "../components/Heading";
import Hero from "../components/Hero";
import useContentHowItWorks from "../hooks/useContentHowItWorks";

function HowItWorks() {
  const content = useContentHowItWorks();

  return (
    <>
      <Hero />
      <div className=" text-center text-2xl flex flex-col gap-4 mb-32">
        {content.subHero.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      {/* <div className="container mx-auto mb-44">
        <Heading>{content.howDoesItWorkSection.heading}</Heading>
        <div className="flex items-center justify-center gap-36">
          <img src={content.howDoesItWorkSection.img} className=" max-w-2xl" />
          <div className="grid grid-cols-3 gap-x-0 gap-y-5 justify-center ">
            {content.howDoesItWorkSection.features.map((feature) => (
              <div
                key={feature.text}
                className=" flex flex-col items-center justify-center"
              >
                <img src={feature.icon} className="mx-auto" />
                <p className=" font-semibold text-lg text-center">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HowItWorks;
