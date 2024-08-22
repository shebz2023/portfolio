import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader,
  ScrollControls,
  useGLTF,
  Scroll,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import Experience from "./components/Experience";
import { Intro } from "./components/intro";

export const LandingPage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroEnd = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  return (
    <div className="bg-black text-white">
      {showIntro && <Intro onIntroEnd={handleIntroEnd} />}
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      {/* <Canvas style={{ height: "100vh", width: "100vw" }}>
        <ambientLight />
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.2}>
            <primitive object={shebzModel.scene} position={[0, 1, 0]} />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader /> */}
    </div>
  );
};

export default LandingPage;
