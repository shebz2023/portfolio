import React from "react";
import { ContactForm } from "./ContactForm";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
export const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen w-screen flex items-center justify-evenly max-md:flex-col p-4 bg-black"
    >
      <div className="flex flex-col items-center justify-center w-1/3 max-md:w-full">
        <img
          src="./avatarsuit.png"
          alt="Your Picture"
          className="rounded-full w-48 h-48 mb-4 object-cover"
        />
        <p className="text-gray-400 text-center mb-4">
          Feel free to reach out for any inquiries or collaborations.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/musabe-shebelle-kelvin-145a2a272"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-400 hover:text-white text-3xl" />
          </a>
          <a
            href="https://github.com/shebz2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-400 hover:text-white text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/shebelleke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-400 hover:text-white text-3xl" />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
