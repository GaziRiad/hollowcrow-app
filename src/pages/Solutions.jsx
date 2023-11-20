import Heading from "../components/Heading";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import useContent from "../hooks/useContent";
import Feature from "../components/Feature";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

function Solutions() {
  const { content } = useContent();

  if (!content) return <Loader />;
  return (
    <PageTransition>
      <div className="relative">
        <Hero />
        <motion.section
          initial={{ opacity: 0, translateY: 150 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 px-4 md:px-0 absolute top-1/3 w-full"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap mb-10 ">
            {content.features.map((feature) => (
              <Link key={feature.name} to={`/${feature.link}`}>
                <Feature name={feature.name} src={feature.icon} />
              </Link>
            ))}
          </div>

          {/* <p className="text-black-800 text-center text-lg font-normal">
          {content.text}
        </p> */}
        </motion.section>
      </div>
    </PageTransition>
  );
}

export default Solutions;
