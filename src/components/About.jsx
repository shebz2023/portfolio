import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { AboutDiv } from "./AboutDiv";
import { LaptopModel } from "./laptopModel";

export const About = () => {
  const [selectedName, setSelectedName] = useState("Aglaea");
  const [targetRotation, setRotation] = useState([1, 0, 0]);
  const handleNameChange = (name) => {
    setSelectedName(name);
  };

  const calculateRotation = () => {
    switch (selectedName) {
      case "Aglaea":
        return [0, -1, 0];
      case "Thalia":
        return [0, 0, 0];
      case "Euphre":
        return [0, -2, 0];
      default:
        return [1, 0, 0];
    }
  };

  useEffect(() => {
    const newRotation = calculateRotation();
    setRotation(newRotation);
  }, [selectedName]);

  return (
    <section
      id="about"
      className="flex flex-col h-screen w-screen bg-[#141414]"
    >
      <Canvas>
        <pointLight position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} />
        <Html>
          <AboutDiv onNameChange={handleNameChange} />
        </Html>
        <LaptopModel targetRotation={targetRotation} />
      </Canvas>
    </section>
  );
};
