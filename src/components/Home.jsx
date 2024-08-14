import React from "react";
import { motion } from "framer-motion";
export const Home = () => {
  const letters = "SHEBELLE".split("");

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  return (
    <section
      id="home"
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="flex flex-col gap-7 items-center w-full">
        <span className="text-center text-2xl  font-thin tracking-widest italic mt-[20%] max-md:mt-[50%]">
          {/* <Typewriter cursor={true} words={words} cursorStyle={"<"} /> */}I
          am
        </span>
        <h1 className="text-[#f9f0ec] text-center text-7xl font-thin tracking-[0.5em] max-md:text-3xl">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3, delay: index * 0.1, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className="bg-neutral-400 w-16 h-[2px]" />
        <p class="text-neutral-400 text-sm leading-5 font-josefin  text-center mx-[20%] max-md:mx-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          deleniti omnis cupiditate saepe, corporis natus quod, velit vero
          soluta dicta id nisi quibusdam ipsum dignissimos, labore dolore unde
          quia inventore! Ratione officiis atque possimus dicta quaerat dolores
          nesciunt veniam quod. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A similique deleniti quibusdam molestias ipsam,
          exercitationem eum pariatur iste repellendus ad!
        </p>
      </div>
    </section>
  );
};
