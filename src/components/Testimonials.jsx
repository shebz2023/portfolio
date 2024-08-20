import React from "react";
import { motion } from "framer-motion";
const letters = [" T", "E", "S", "T", "I", "M", "O", "N" ,"I","A","L","S"];
const letterVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10, x: 40 },
  visible: { opacity: 1, scale: 1, y: 0, x: 0 },
};
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company X",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarUrl: "/avatarsuit.png", // Path to the avatar image in the public folder
  },
  {
    name: "Jane Smith",
    role: "CTO, Company Y",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarUrl: "/avatarsuit.png", // Path to the avatar image in the public folder
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="h-screen w-screen flex justify-center items-center relative bg-[#141414] text-white p-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
            >
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-contain"
              />
              <div>
                <p className="mb-4 text-gray-300 font-josefin">{testimonial.text}</p>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
