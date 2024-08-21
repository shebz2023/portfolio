// src/components/Skills.js
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", percentage: 90, imageUrl: "/js.png" },
  { name: "Reactjs", percentage: 85, imageUrl: "/react_js.png" },
  { name: "ReactNative", percentage: 80, imageUrl: "/reactnative.jpg" },
  { name: "Three-fiber", percentage: 75, imageUrl: "/threejs.png" },
  { name: "Postgres", percentage: 80, imageUrl: "/postgres.png" },
  { name: "GraphQl", percentage: 75, imageUrl: "/graphql.png" },
  { name: "nodeJs", percentage: 75, imageUrl: "/node.png" },
  { name: "jest", percentage: 75, imageUrl: "/jest.png" },
];
const letters = ["S", "K", "I", "L", "L", "S"];
const letterVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10, x: 40 },
  visible: { opacity: 1, scale: 1, y: 0, x: 0 },
};
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="skills"
      className="h-screen w-screen flex justify-center items-center relative bg-[#141414] text-white p-8 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-[#f9f0ec] my-6 text-center text-3xl md:font-thin  max-md:text-3xl">
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
        </h1>{" "}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate={controls}
                className="w-1/6 flex items-center justify-center"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10 object-cover rounded-full ]"
                />
              </motion.div>
              <div className="w-1/3 text-right pr-4">
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
              <div className="w-2/3 bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-black h-full"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { width: `${skill.percentage}%` },
                    hidden: { width: 0 },
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
              </div>
              <div className="w-1/6 pl-4 text-left">
                <span className="text-lg font-semibold">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
