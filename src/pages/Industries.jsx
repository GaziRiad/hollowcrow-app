import Footer from "../components/Footer";
import Hero from "../components/Hero";

import footerImg from "../assets/footer-img.png";
import Heading from "../components/Heading";
import useContentIndustries from "../hooks/useContentIndustries";
import SwipingSlider from "../components/SwipingSlider";
import PageTransition from "../components/PageTransition";

import { motion } from "framer-motion";

function Industries() {
  const content = useContentIndustries();

  return (
    <PageTransition>
      <Hero />

      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-32"
      >
        <Heading type="h3">{content.firstSection.heading}</Heading>

        <div className="flex items-start justify-center flex-col gap-12 md:flex-row md:flex-wrap lg:gap-10 xl:px-4">
          {content.firstSection.content.map((el) => (
            <div key={el.title} className="lg:max-w-md 2xl:max-w-lg">
              <img src={el.img} className="rounded-2xl mb-6 w-[85%]" />
              <p className="font-semibold mb-2 text-black-800 text-lg 2xl:text-xl">
                {el.title}
              </p>
              <p className="text-black-800 lg:text-base 2xl:text-lg">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-12 px-10 lg:px-0 lg:mb-32 xl:px-4"
      >
        <Heading type="h2" style="lg:!text-left">
          {content.thirdSection.heading}
        </Heading>

        <div className="flex items-center justify-center flex-col gap-8 lg:flex-row lg:gap-6 xl:gap-32 xl:px-4">
          <p className="text-lg text-center leading-relaxed lg:text-left 2xl:text-xl">
            {content.thirdSection.content.text}
          </p>
          <img
            src={content.thirdSection.content.img}
            className="w-full rounded-2xl lg:w-[40%]"
          />
        </div>
      </motion.section>

      <SwipingSlider content={content.sliderSection} />

      <Footer icon={footerImg} />
    </PageTransition>
  );
}

export default Industries;
