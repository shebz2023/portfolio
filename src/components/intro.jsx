import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const Intro = ({ onIntroEnd }) => {
  const controls = useAnimation();

  const sequence = async () => {
    await controls.start({ opacity: 1, x: 0 });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay between texts
    await controls.start({ opacity: 1, x: 0 });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay between texts
    await controls.start({ opacity: 1, x: 0 });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay before disappearing
    await controls.start({ opacity: 0, x: -1000 });
    onIntroEnd();
  };

  useEffect(() => {
    sequence();
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center  bg-black text-white z-50"
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center text-7xl max-md:text-3xl font-josefin mb-7 tracking-widest text-neutral-700"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        SOFTWARE ENGINEER
      </motion.div>
      <motion.div
        className="text-center text-7xl max-md:text-3xl font-josefin mb-7 text-neutral-400 tracking-widest"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        FREELANCER
      </motion.div>
      <motion.div
        className="text-center text-7xl max-md:text-4xl font-josefin mb-4 text-neutral-200 tracking-widest"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        DESIGNER
      </motion.div>
    </motion.div>
  );
};
