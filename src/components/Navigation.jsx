import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "../contexts/LanguageContext";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Button";

import useContent from "../hooks/useContent";

function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [displayLangs, setDisplayLangs] = useState(false);

  const { activeLanguage, setActiveLanguage } = useLanguage();

  useEffect(() => {
    if (navIsOpen) document.body.style.overflow = "hidden";
    if (!navIsOpen) document.body.style.overflow = "auto";
  }, [navIsOpen]);

  const content = useContent();

  return (
    <nav>
      <ul className="hidden text-white text-lg gap-8 items-center justify-center lg:flex xl:text-xl relative">
        {content.navigation.links.map((nav) => (
          <NavLink key={nav.text}>
            <li className="cursor-pointer translate-x-0 origin-left hover:text-green-500 hover:translate-x-1 transition-all">
              {nav.text}
            </li>
          </NavLink>
        ))}
        <ul className=" text-primary flex flex-col items-start justify-center gap-3 relative ">
          {content.navigation.languages.map((lang) => {
            if (lang.attribute === activeLanguage)
              return (
                <button
                  key={lang.attribute}
                  className={`flex items-center justify-center gap-2 `}
                  onClick={() => setDisplayLangs((cur) => !cur)}
                >
                  <span>{lang.lang}</span>
                  <span>
                    <FaChevronDown size={16} />
                  </span>
                </button>
              );
          })}

          {displayLangs && (
            <ul className="absolute top-10 flex flex-col gap-3">
              {content.navigation.languages.map((lang) => {
                if (lang.attribute !== activeLanguage)
                  return (
                    <li
                      className=""
                      key={lang.attribute}
                      onClick={() => {
                        setActiveLanguage(lang.attribute);
                        setDisplayLangs(false);
                      }}
                    >
                      {lang.lang}
                    </li>
                  );
              })}
            </ul>
          )}
        </ul>

        <Button navigation={true}>Login</Button>
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

      {navIsOpen && (
        <div
          className={`absolute inset-0 h-screen z-10 bg-primary lg:hidden  `}
        >
          <Logo
            src="images/Holocrow-logo-white.png"
            styling="pt-12 pl-8 w-48"
          />
          <ul className="text-white text-2xl flex flex-col items-center mt-44 gap-6 ">
            {content.navigation.links.map((nav) => (
              <NavLink key={nav.text}>
                {/*  translate-x-0 origin-left hover:text-green-500 hover:translate-x-1 transition-all */}
                <li className="cursor-pointer hover:text-green-500 hover:translate-x-1 transition-all">
                  {nav.text}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
