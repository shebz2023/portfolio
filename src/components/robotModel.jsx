import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const RobotModel = () => {
  const robotModel = useGLTF("./models/robot2.glb");
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {

      const time = state.clock.getElapsedTime();
      const radius = 9; 
      const speed = 1; 

      ref.current.position.x = Math.cos(time * speed) * radius;
      // ref.current.position.z = Math.sin(time * speed) * radius;

    }
  });

  return (
    <primitive
      ref={ref}
      object={robotModel.scene}
      position={[0, -3, 0]}
      rotation={[0, 2.7, 0]}
      scale={2}
    />
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RobotModel />
    </Canvas>
  );
};

export default App;
