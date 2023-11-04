import { motion } from "framer-motion";
import heropattern from "../assets/hero-pattern.png";
import Heading from "./Heading";
import Button from "./Button";

function HeroPattern() {
  return (
    <div className="hidden absolute md:-bottom-[20%]  right-0 w-80 md:block xl:-bottom-[27%] 2xl:-bottom-[18%]">
      <motion.img
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 0.9 }}
        animate={{ scaleY: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
        }}
        src={heropattern}
        className="z-10"
      />
      <div className=" z-20 absolute top-[28%] px-10 pl-20 text-center">
        <Heading type="h4">Beyond Watching</Heading>
        <p className="text-white font-semibold mb-3">
          Predict, Protect, and Perform with AI
        </p>
        <Button type="small">Connect Now</Button>
      </div>
    </div>
  );
}

export default HeroPattern;
