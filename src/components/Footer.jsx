import { useRef } from "react";
import Button from "./Button";

import { motion, useScroll } from "framer-motion";

function Footer({ children, icon, btn = "get started", btnPath }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.3", "1 1"],
  });

  return (
    <div className="bg-primary">
      <motion.section
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="px-6 py-20 "
      >
        <footer className="flex flex-col items-center justify-center relative ">
          {children}
          <div className="relative mb-4 lg:mb-10 z-20">
            <img src={icon} className=" scale-75 lg:scale-95 " />
            <p className="absolute top-[40%] left-1/2 translate-x-[-50%] z-10 lg:text-2xl font-bold">
              #BeyondWatching
            </p>
          </div>
          <p className="text-white font-bold text-4xl tracking-wider absolute top-[66%] lg:top-[60%] xl:tracking-[1.25rem] lg:text-8xl  ">
            Let’s Get Started
          </p>
          <Button>{btn}</Button>
        </footer>
      </motion.section>
    </div>
  );
}

export default Footer;
