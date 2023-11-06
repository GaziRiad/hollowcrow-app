import { useInView } from "framer-motion";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect, useRef, useState } from "react";
import HeroPattern from "./HeroPattern";
import Heading from "./Heading";
import { navigation } from "../constants/navigation";

function Hero({ img, heading, herobg = "hero" }) {
  // Make nav sticky when scrolling
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef();
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) setSticky(false);
    else setSticky(true);
  }, [isInView]);

  return (
    <section ref={heroRef} className={`${herobg} relative lg:mb-32`}>
      <header
        className={`z-50 top-0 w-full flex justify-between px-8 py-8 items-center lg:justify-around lg:px-0 ${
          sticky
            ? "fixed bg-white shadow-lg md:py-6 2xl:py-8"
            : "absolute pt-10 2xl:pt-20"
        }`}
      >
        <Logo />
        <Navigation content={navigation} sticky={sticky} />
      </header>
      {img && (
        <img
          src={img}
          className={`absolute left-1/2 -translate-x-[50%]  w-96   ${
            heading
              ? "bottom-[35%] lg:bottom-[30%] xl:w-1/4"
              : "bottom-[20%] md:w-1/2 lg:w-1/3 lg:bottom-[18%] xl:bottom-[15%]"
          } `}
        />
      )}
      {heading && (
        <div className="absolute left-1/2 -translate-x-[50%] bottom-[20%] lg:bottom-[10%]">
          <Heading>{heading}</Heading>
        </div>
      )}

      <HeroPattern />
    </section>
  );
}

export default Hero;
