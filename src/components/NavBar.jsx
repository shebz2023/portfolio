import React from "react";
import { motion } from "framer-motion";

export const NavBar = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="fixed top-0 z-10 w-screen py-[4%] px-[20%] font-josefin text-white bg-black max-md:p-6 max-md:text-xs tracking-widest "
    >
      <ul className="flex justify-between  text-xs ">
        <li>
          <a
            href="#home"
            className="cursor-pointer hover:text-neutral-400  transition-colors duration-300 "
            onClick={(e) => handleScroll(e, "#home")}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer hover:text-neutral-400  transition-colors duration-300"
            onClick={(e) => handleScroll(e, "#about")}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="cursor-pointer hover:text-neutral-400  transition-colors duration-300"
            onClick={(e) => handleScroll(e, "#portfolio")}
          >
            PORTFOLIO
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="cursor-pointer hover:text-neutral-400  transition-colors duration-300"
            onClick={(e) => handleScroll(e, "#blog")}
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer hover:text-neutral-400  transition-colors duration-300"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </motion.header>
  );
};
