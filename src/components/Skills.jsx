// src/components/Skills.js
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", percentage: 90, imageUrl: "/avatarsuit.png" },
  { name: "Reactjs", percentage: 85, imageUrl: "/React.png" },
  { name: "ReactNative", percentage: 80, imageUrl: "/avatarsuit.png" },
  { name: "Three-fiber", percentage: 75, imageUrl: "/avatarsuit.png" },
  { name: "GraphQl", percentage: 75, imageUrl: "/avatarsuit.png" },
  { name: "nodeJs", percentage: 75, imageUrl: "/avatarsuit.png" },
  { name: "nodeJs", percentage: 75, imageUrl: "/python.jpg" },
];

export const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow the animation to trigger multiple times
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
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-1/6 flex items-center justify-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-10 h-10"
                />
              </div>
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
