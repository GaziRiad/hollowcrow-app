import Heading from "../components/Heading";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import useContent from "../hooks/useContent";
import Feature from "../components/Feature";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";

function Solutions() {
  const { content } = useContent();

  if (!content) return <Loader />;
  return (
    <div>
      <Hero />

      <motion.section
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto mb-8 px-4 md:px-0"
      >
        <Heading type="h1" color="primary">
          {content.heading}
        </Heading>
        <div className="flex items-center justify-center gap-8 flex-wrap mb-10 xl:gap-20  ">
          {content.features.map((feature) => (
            <Link key={feature.name} to={`/${feature.link}`}>
              <Feature name={feature.name} src={feature.icon} />
            </Link>
          ))}
        </div>

        <p className="text-black-800 text-center text-lg font-normal">
          {content.text}
        </p>
      </motion.section>
    </div>
  );
}

export default Solutions;
