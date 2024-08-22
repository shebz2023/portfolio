import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import LazyLoad from "react-lazyload";
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 9 }}
      className="fixed top-0 z-40 w-screen py-[4%] px-[20%] font-josefin text-white bg-black max-md:p-6 max-md:text-xs tracking-widest"
    >
      <div className="flex justify-between items-center ">
        <LazyLoad height={10} offset={100}>
          <img
            src="./avatarsuit.png"
            className="rounded-full w-14 h-14 object-cover bg-cover md:hidden"
            alt="Avatar"
          />
        </LazyLoad>

        <div className="hidden md:flex justify-between w-full text-xs">
          <ul className="flex justify-between w-full">
            <li>
              <a
                href="#home"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#home")}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#about")}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#experience")}
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#portfolio")}
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#testimonials")}
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#testimonials")}
              >
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden mx-[10%]">
          {isMenuOpen ? (
            <X size={32} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <List size={32} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-black opacity-80  absolute z-20 h-screen w-screen">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="md:hidden flex flex-col gap-8 justify justify-center items-center "
          >
            <a
              href="#home"
              className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
              onClick={(e) => handleScroll(e, "#home")}
            >
              HOME
            </a>
            <a
              href="#about"
              className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
              onClick={(e) => handleScroll(e, "#about")}
            >
              ABOUT
            </a>
            <a
              href="#portfolio"
              className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
              onClick={(e) => handleScroll(e, "#portfolio")}
            >
              PORTFOLIO
            </a>
            <a
              href="#testimonials"
              className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
              onClick={(e) => handleScroll(e, "#testimonials")}
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className="cursor-pointer hover:text-neutral-400 transition-colors duration-300"
              onClick={(e) => handleScroll(e, "#contact")}
            >
              CONTACT
            </a>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
};
