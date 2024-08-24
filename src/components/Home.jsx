import React, { Suspense } from "react";
import { motion } from "framer-motion";
export const Home = () => {
  const letters = "SHEBELLE".split("");

  const letterVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10, x: 40 },
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
  };
  

  return (
    <section
      id="home"
      className="h-screen w-screen flex justify-center items-center relative"
    >
      <div className="flex flex-col gap-7 items-center w-full relative z-10">
        <span className="text-center text-2xl font-thin tracking-widest italic mt-[22%] max-md:mt-[50%]">
          {/* <Typewriter cursor={true} words={words} cursorStyle={"<"} /> */}I
          am
        </span>
        <h1 className="text-[#f9f0ec] text-center text-7xl md:font-thin tracking-[0.5em] max-md:text-3xl">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 3, delay: index * 0.1, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 3 }}
          className="bg-neutral-400 w-16 h-[2px]"
        />
        <p className="text-neutral-400 text-sm leading-5 font-josefin text-center mx-[20%] max-md:mx-5">
         who is SHEBELLE? he is a mobile developer & web developer,he worked on some platforms for shopping,he writes tests for each project,anyways tests ensure that any bug gets detected without a user knowing.for freelance services he use UPWORk 
        </p>
      </div>
    </section>
  );
};
