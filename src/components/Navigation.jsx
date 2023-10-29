import { NavLink } from "react-router-dom";
import { navigations } from "../constants/index";
import { useEffect, useState } from "react";
import Logo from "./Logo";

import { AnimatePresence, motion } from "framer-motion";

function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    if (navIsOpen) document.body.style.overflow = "hidden";
    if (!navIsOpen) document.body.style.overflow = "auto";
  }, [navIsOpen]);

  return (
    <nav>
      <ul className="hidden text-white text-lg gap-8 lg:flex xl:text-xl">
        {navigations.map((nav) => (
          <NavLink key={nav.text}>
            <li className="cursor-pointer translate-x-0 origin-left hover:text-green-500 hover:translate-x-1 transition-all">
              {nav.text}
            </li>
          </NavLink>
        ))}
      </ul>
      {/* MOBILE MENU */}
      <div
        className={`cursor-pointer absolute right-10 z-20 lg:hidden`}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <div
          className={`${navIsOpen ? " -rotate-45" : ""} w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500`}
        ></div>
        <div
          className={`${navIsOpen ? "hidden" : "block"} w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500 `}
        ></div>
        <div
          className={`${
            navIsOpen ? "rotate-45 -translate-y-2" : ""
          } w-12 h-1 mb-1.5 ${
            navIsOpen ? "bg-white" : "bg-primary"
          } duration-500 `}
        ></div>
      </div>

      <AnimatePresence>
        {navIsOpen && (
          <motion.div
            className={`absolute inset-0 h-screen z-10 bg-primary lg:hidden  `}
          >
            <Logo
              src="images/Holocrow-logo-white.png"
              styling="pt-12 pl-8 w-48"
            />
            <ul className="text-white text-2xl flex flex-col items-center mt-44 gap-6 ">
              {navigations.map((nav) => (
                <NavLink key={nav.text}>
                  {/*  translate-x-0 origin-left hover:text-green-500 hover:translate-x-1 transition-all */}
                  <li className="cursor-pointer hover:text-green-500 hover:translate-x-1 transition-all">
                    {nav.text}
                  </li>
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;
