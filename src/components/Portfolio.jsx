import React from "react";
import { motion } from "framer-motion";

const letters = ["P", "o", "r", "f", "o", "l", "i", "o"];
const letterVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10, x: 40 },
  visible: { opacity: 1, scale: 1, y: 0, x: 0 },
};

const projects = [
  {
    title: "TODO",
    description: "the app that helps users to organise their tasks",
    imageUrl: "/image.jpg",
    link: "https://shebztodos.vercel.app/",
  },
  {
    title: "EXCLUSIVE",
    description:
      "this  is a shopping app with realtime notifications and order status updates",
    imageUrl: "/shop.jpg",
    link: "https://e-commerce-serge-30-fn-staging.netlify.app",
  },
  {
    title: "TRACK",
    description:
      "this  is tracking app ,to track users performance in an organisation",
    imageUrl: "/logoWhite.svg",
    link: "https://beta.devpulse.org",
  },
];

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="h-screen w-screen flex justify-center items-center relative bg-black text-white p-8"
    >
      <div className="max-w-4xl mx-auto cursor-pointer">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-[#141414] p-6 rounded-lg shadow-md transform transition-transform duration-300 block"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 object-cover mb-4 rounded-lg "
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
