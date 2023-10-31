import Heading from "../components/Heading";
import useContentHowItWorks from "../hooks/useContentHowItWorks";

function HowDoesItWork() {
  const content = useContentHowItWorks();
  return (
    <div className="container mx-auto mb-14 lg:mb-36">
      <Heading>{content.howDoesItWorkSection.heading}</Heading>

      <div className="flex items-center justify-center flex-col px-10 gap-10 lg:px-0 lg:flex-row lg:gap-16 2xl:gap-36">
        <img
          src={content.howDoesItWorkSection.img}
          className=" md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-[40%]"
        />

        <div className="grid grid-cols-3 gap-x-0 gap-y-5 justify-center lg:gap-x-4 ">
          {content.howDoesItWorkSection.features.map((feature) => (
            <div
              key={feature.text}
              className=" flex flex-col items-center justify-center"
            >
              <img src={feature.icon} className="mx-auto w-20  xl:w-24" />
              <p className=" font-semibold text-center md:text-lg">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowDoesItWork;
