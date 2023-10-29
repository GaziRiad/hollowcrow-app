import Logo from "./Logo";
import Navigation from "./Navigation";
import { FaPlay } from "react-icons/fa6";
import Socials from "./Socials";

import heropattern from "../assets/hero-pattern.png";

function Hero() {
  return (
    <>
      <section className="contrast-125 relative w-full h-screen cursor-pointer mb-32">
        <video
          className="w-full h-full object-cover object-center"
          muted
          loop
          autoPlay
          playsInline
          src="/videos/hero-preview-2.mp4"
          type="video/mp4"
        ></video>

        <header className="absolute top-0 w-full flex justify-between px-8 pt-12 items-center lg:justify-around lg:px-0 xl:top-[4vh]">
          <Logo />
          <Navigation />
        </header>

        {/* VID OVERLAY */}
        <div className="absolute top-[25%] left-1/2 translate-x-[-50%] flex flex-col gap-8 text-white text-4xl items-center font-extrabold lg:top-[40%] lg:translate-x-[-60%] xl:translate-x-[-50%] xl:gap-28  xl:text-7xl lg:flex-row">
          <p>Beyond</p>
          <img src="/images/camera-vector.png" className="w-20 lg:w-32" />
          <p className=" opacity-50">Watching</p>
        </div>
        <span className="border rounded-full p-8 absolute top-[65%] left-1/2 translate-x-[-50%] cursor-pointer lg:top-[57%] lg:left-[28%] ">
          <FaPlay size={36} color="white" />
        </span>
        <span className="absolute top-[92%] ml-8 sm:ml-8 lg:left-[10%] ">
          <Socials />
        </span>
        <img
          src={heropattern}
          className="hidden absolute -bottom-[20%] right-0 w-80 opacity-90 md:block"
        />
      </section>
    </>
  );
}

export default Hero;
