import React from "react";
import { ContactForm } from "./ContactForm";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";


export const Contact = () => {
  return (
    <section
      id="contact"
      className=" h-screen w-screen flex  items-center justify-evenly"
    >
      <ContactForm />
      <div className="h-1/3 w-1/3 bg-yellow-300">
  
      </div>
    </section>
  );
};
