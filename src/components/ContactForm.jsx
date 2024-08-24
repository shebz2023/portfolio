import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
export const ContactForm = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
  
    <motion.div  style={{ scale }} className="h-2/3 w-1/3 max-md:w-4/5 border-b-2  border-neutral-700 rounded-lg flex flex-col items-center justify-evenly  ">
      <div className="ml-6 h-1/6 w-5/6 flex flex-col items-start ">
        <h2 className=" text-neutral-400 text-sm leading-5 font-josefin  text-center ">
          Get in touch
        </h2>
        <h1 className="text-[#f9f0ec] text-center text-3xl font-thin tracking-widest">
          Contact
        </h1>
      </div>
      <input
        className="bg-black placeholder:text-neutral-600  p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
        placeholder="title..."
      ></input>
      <input
        className="bg-black placeholder:text-neutral-600  p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
        placeholder="email..."
      ></input>
      <textarea
        className="bg-black placeholder:text-neutral-600  p-2 rounded border border-[#141414] focus:outline-none focus:border-neutral-700 w-3/4"
        placeholder="message..."
      ></textarea>{" "}
      <button className="p-2 border-2 border-[#141414] text-neutral-400 rounded-2xl font-josefin hover:text-white transition-colors duration-500">
        Send
      </button>
    </motion.div>
  );
};
