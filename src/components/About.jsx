import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader, OrbitControls, useGLTF } from "@react-three/drei";
import { AboutDiv } from "./AboutDiv";
import { LaptopModel } from "./laptopModel";
import { Typewriter } from "react-simple-typewriter";

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
  const words = ["Loading..", "a robot"];
  const LoadingFallback = () => (
    <Html center>
      <div className="text-[#f9f0ec] text-center text-xl font-josefin tracking-widest">
        <Typewriter
          words={words}
          cursor={true}
          loop={false}
          cursorStyle={"<"}
        />
      </div>
    </Html>
  );

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
