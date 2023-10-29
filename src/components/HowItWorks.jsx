import Button from "./Button";
import Heading from "./Heading";
import Link from "./Link";

import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <section className="relative mb-32 px-4 bg-primary py-20 md:px-0">
      <div className="container mx-auto ">
        <Heading color="white" type="h2">
          How does Holocrow work?
        </Heading>

        <div className="flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-12 lg:flex-row md:mb-20 lg:mb-36  xl:gap-36 lg:px-30 xl:px-44 mb-16 ">
          <div className="z-20">
            <Heading type="h4">
              1. Connect Your Existing CCTVs To Holocrow
            </Heading>
            <p className="text-white text-lg text-center lg:text-left lg:text-xl ">
              You don&apos;t need to purchase new cameras, equipment, or
              anything else! Holocrow works with your existing cameras,
              regardless of the model. Moreover, connecting it is quite easy.
              It&apos;s plug and play.
            </p>
          </div>
          <motion.img
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            src="images/how-it-work-main-1.png"
            className=" w-2/3 lg:w-1/2 mx-auto z-20"
          />
        </div>
        {/*  */}
        <div className="flex flex-col-reverse items-center gap-6 sm:gap-10 px-4 sm:px-12  lg:flex-row md:mb-28  xl:gap-36 lg:px-30 xl:px-44 mb-16">
          <motion.img
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            src="images/how-it-work-main-3.png"
            className=" w-2/3 lg:w-1/2 mx-auto z-20"
          />
          <div className="z-20">
            <Heading type="h4">2. Select what you want to track</Heading>
            <p className="text-white text-lg text-center lg:text-left lg:text-xl">
              Select the things you want to track with a single click from the
              dropdown menu.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-12   lg:flex-row  md:mb-28  xl:gap-36 lg:px-30 xl:px-44 mb-14">
          <div className="z-20">
            <Heading type="h4">3. Start getting live alerts & reports</Heading>
            <p className="text-white text-lg text-center lg:text-left lg:text-xl">
              Start receiving notifications and reports instantly. It&apos;s
              that simple!
            </p>
          </div>
          <motion.img
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            src="images/how-it-work-main-3.png"
            className=" w-2/3 lg:w-1/2 mx-auto z-20"
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-6">
          <Button bgcolor="white">Get started</Button>
          <Link>Learn more</Link>
        </div>
      </div>

      {/* PATTERN */}
      <motion.img
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        src="images/how-it-work-pattern.png"
        className="absolute top-[10%] left-0 h-[75%] z-10 xl:top-[8%]"
      />
    </section>
  );
}

export default HowItWorks;
