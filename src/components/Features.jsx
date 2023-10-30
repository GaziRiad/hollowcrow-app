import useContent from "../hooks/useContent";
import Feature from "./Feature";
import Heading from "./Heading";

import { motion } from "framer-motion";

function Features() {
  const content = useContent();

  ////////////////////////

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, translateY: -100 }}
      transition={{ duration: 0.5, translateY: "0%" }}
      className="container mx-auto mb-28 px-4 md:px-0"
    >
      <Heading type="h1" color="primary">
        {content.featuresSection.heading}
      </Heading>
      <div className="flex items-center justify-center gap-8 flex-wrap mb-10 xl:gap-20  ">
        {content.featuresSection.features.map((feature) => (
          <Feature key={feature.name} name={feature.name} src={feature.icon} />
        ))}
      </div>

      <p className="text-black-800 text-center text-lg font-normal">
        {content.featuresSection.text}
      </p>
    </motion.section>
  );
}

export default Features;
