import Heading from "./Heading";
import useContent from "../hooks/useContent";

import { motion } from "framer-motion";

function PlatformOverview() {
  const content = useContent();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, translateY: -100 }}
      transition={{ duration: 0.8, translateY: "0%" }}
      viewport={{ once: false }}
      className="container mx-auto mb-44 px-8 lg:px-0"
    >
      <Heading type="h2" style="lg:!text-left">
        {content.platformDetails.heading}
      </Heading>

      <div className="flex flex-col items-center justify-center gap-14 xl:flex-row xl:gap-24">
        <div>
          {content.platformDetails.textContent.map((content) => (
            <div key={content.title} className="text-center mb-8 lg:text-left">
              <Heading type="h4" style="!text-primary">
                {content.title}
              </Heading>
              <p className=" lg:text-lg">{content.text}</p>
            </div>
          ))}
        </div>
        <motion.img
          initial={{ translateY: 1 }}
          animate={{ translateY: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5,
          }}
          src={content.platformDetails.sectionImg}
          className=" rounded-3xl shadow-lg lg:aspect-auto lg:h-1/2 lg:w-1/2"
        />
      </div>
    </motion.section>
  );
}

export default PlatformOverview;
