import Heading from "../components/Heading";
import Hero from "../components/Hero";
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

      <div className="container mx-auto mb-44">
        <Heading>{content.howDoesItWorkSection.heading}</Heading>

        <div className="flex items-center justify-center flex-col px-10 gap-7 lg:px-0 lg:flex-row lg:gap-16 2xl:gap-36">
          <img
            src={content.howDoesItWorkSection.img}
            className=" md:w-2/3 lg:w-1/2 xl:w-1/2"
          />

          <div className="grid grid-cols-3 gap-x-0 gap-y-5 justify-center lg:gap-x-4 ">
            {content.howDoesItWorkSection.features.map((feature) => (
              <div
                key={feature.text}
                className=" flex flex-col items-center justify-center"
              >
                <img
                  src={feature.icon}
                  className="mx-auto w-20 xl:w-24 2xl:w-28"
                />
                <p className=" font-semibold text-center md:text-lg">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
