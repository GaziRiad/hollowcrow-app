import useContentHowItWorks from "../hooks/useContentHowItWorks";
import Heading from "./Heading";

function CardsSection() {
  const content = useContentHowItWorks();

  return (
    <section className="container mx-auto grid grid-cols-1 justify-items-center gap-y-8 md:grid-cols-2 lg:gap-y-12 lg:gap-x-10 lg:px-24 xl:px-0 xl:grid-cols-4 xl:gap-x-16  mb-20 lg:mb-44  ">
      {content.cardsSection.map((card) => (
        <div
          key={card.title}
          className="shadow-md w-[70%] px-8 py-6 flex flex-col items-center gap-4 rounded-xl md:w-[95%] lg:w-full"
        >
          <img src={card.icon} className=" w-20" />
          <Heading type="h4" style="text-[#ffb800]">
            {card.title}
          </Heading>
          <ul className="flex flex-wrap gap-4">
            {card.options.map((text) => (
              <li
                key={text}
                className="text-base text-black-400 text-center leading-tight shadow-md bg-white rounded-full px-3 py-2"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default CardsSection;
