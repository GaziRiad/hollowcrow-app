import Footer from "../components/Footer";
import Hero from "../components/Hero";

import footerImg from "../assets/footer-img.png";
import Heading from "../components/Heading";
import useContentIndustries from "../hooks/useContentIndustries";
import SwipingSlider from "../components/SwipingSlider";

function Industries() {
  const content = useContentIndustries();

  return (
    <>
      <Hero />

      <section className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-32">
        <Heading>{content.firstSection.heading}</Heading>

        <div className="flex items-start justify-center flex-col gap-12 md:flex-row md:flex-wrap lg:gap-10 2xl:gap-12">
          {content.firstSection.content.map((el) => (
            <div key={el.title} className="lg:max-w-md 2xl:max-w-lg">
              <img src={el.img} className="rounded-2xl mb-6 w-[85%]" />
              <p className="font-semibold mb-2 text-black-800 text-xl 2xl:text-2xl">
                {el.title}
              </p>
              <p className="text-black-800 lg:text-base 2xl:text-xl">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-32">
        <Heading type="h2" style="lg:!text-left">
          {content.thirdSection.heading}
        </Heading>

        <div className="flex items-center justify-center flex-col gap-8 lg:flex-row lg:gap-12 xl:gap-32">
          <p className="text-lg text-center leading-relaxed lg:text-left lg:text-xl 2xl:text-2xl">
            {content.thirdSection.content.text}
          </p>
          <img
            src={content.thirdSection.content.img}
            className="w-full rounded-2xl lg:w-[40%]"
          />
        </div>
      </section>

      <SwipingSlider content={content.sliderSection} />

      <Footer icon={footerImg} />
    </>
  );
}

export default Industries;
