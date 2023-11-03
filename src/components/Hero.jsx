import heroImg from "../assets/hero-shared-img.png";
import crowImg from "../assets/HowItWorksPage/crow.png";
import heropattern from "../assets/hero-pattern.png";

import { motion, useInView } from "framer-motion";
import Heading from "./Heading";
import Button from "./Button";
import Logo from "./Logo";
import Navigation from "./Navigation";
import useContentHowItWorks from "../hooks/useContentHowItWorks";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const content = useContentHowItWorks();

  // Make nav sticky when scrolling
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef();
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) setSticky(false);
    else setSticky(true);
  }, [isInView]);

  return (
    <section ref={heroRef} className="hero relative lg:mb-32">
      <header
        className={`bg-white z-50 top-0 w-full flex justify-between px-8 py-8 items-center lg:justify-around lg:px-0 ${
          sticky ? "fixed shadow-xl md:py-6 2xl:py-8" : "absolute pt-20"
        }`}
      >
        <Logo />
        <Navigation content={content} sticky={sticky} />
      </header>
      <img
        src={heroImg}
        className="absolute left-1/2 -translate-x-[50%] bottom-1/2 translate-y-[50%] w-72 md:w-1/2 lg:w-1/3 lg:bottom-[42%]"
      />
      <img
        src={crowImg}
        className=" absolute bottom-[42%] left-1/2 -translate-x-[50%] w-1/2 md:bottom-[38%] lg:bottom-[34%] lg:w-1/3 xl:w-1/4 xl:bottom-[28%] "
      />

      <div className="hidden absolute -bottom-[18%] right-0 w-80 md:block">
        <motion.img
          style={{ transformOrigin: "top" }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
          }}
          src={heropattern}
          className="z-10"
        />
        <div className=" z-20 absolute top-1/2 -translate-y-[55%] px-10 pl-14 text-center">
          <Heading type="h4">Beyond Watching</Heading>
          <p className="text-white font-semibold mb-3">
            Predict, Protect, and Perform with AI
          </p>
          <Button type="small">Connect Now</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
