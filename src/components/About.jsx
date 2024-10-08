import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader, OrbitControls, useGLTF } from "@react-three/drei";
import { AboutDiv } from "./AboutDiv";
import { LaptopModel } from "./laptopModel";
import { LoadingFallback } from "./LoadingFallback";

export const About = () => {
  const [selectedName, setSelectedName] = useState("Aglaea");
  const [targetRotation, setRotation] = useState([0, -1, 0]);
  const handleNameChange = (name) => {
    setSelectedName(name);
  };

  const calculateRotation = () => {
    switch (selectedName) {
      case "English":
        return [0, -1, 0];
      case "French":
        return [0, 0, 0];
      case "Dutch":
        return [0, -2, 0];
      default:
        return [0, -1, 0];
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
        <Suspense fallback={<LoadingFallback />}>
          <pointLight position={[0, 0, 0]} />
          <Html
            className="flex flex-col max-md:items-center max-md:justify-center max-md:h-full max-md:w-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "auto",
            }}
          >
            {" "}
            <AboutDiv onNameChange={handleNameChange} />
          </Html>
          <LaptopModel targetRotation={targetRotation} />
        </Suspense>
      </Canvas>
    </section>
  );
};
