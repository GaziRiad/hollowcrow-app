import { motion } from "framer-motion";
import heropattern from "../assets/hero-pattern.png";
import Heading from "./Heading";
import Button from "./Button";

function HeroPattern() {
  return (
    <div className="hidden absolute md:-bottom-[20%] right-0 w-72 lg:block xl:-bottom-[27%] 2xl:-bottom-[20%]">
      <motion.img
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 0.95 }}
        animate={{ scaleY: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
        src={heropattern}
        className="z-10"
      />
      <div className=" z-20 absolute top-[24%] px-4 pl-10 text-center">
        <Heading type="h4" style="!text-center">
          Beyond Watching
        </Heading>
        <p className="text-white mb-3 px-6">Detect Perform Protect with AI</p>
        <Button to="/signup" type="small">
          Connect Now
        </Button>
      </div>
    </div>
  );
}

export default HeroPattern;
