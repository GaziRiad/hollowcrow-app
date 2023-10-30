import Heading from "./Heading";
import HeadingDescription from "./HeadingDescription";
import Slider from "./Slider";
import Link from "./Link";

import useContentHome from "../hooks/useContentHome";
import { motion } from "framer-motion";

function SlidersSection() {
  const content = useContentHome();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, translateY: -100 }}
      transition={{ duration: 0.8, translateY: "0%" }}
      viewport={{ once: false }}
      className="mb-32 px-4 md:px-0"
    >
      <Heading>{content.slidersSection.heading}</Heading>
      <HeadingDescription>
        {content.slidersSection.subHeading}
      </HeadingDescription>

      {content.slidersSection.sliders.map((slider) => (
        <Slider slider={slider} key={slider.heading} />
      ))}

      <Link>SOLUTIONS BY INDUSTRIES</Link>
    </motion.section>
  );
}

export default SlidersSection;
