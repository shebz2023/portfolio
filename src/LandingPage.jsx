import React, { Suspense, useRef } from "react";
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

export const LandingPage = () => {
  // const shebzModel = useGLTF("./models/shebzModel.glb");

  return (
    <div className=" bg-black text-white ">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
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
