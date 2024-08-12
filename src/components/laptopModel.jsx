import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const LaptopModel = ({ targetRotation }) => {
  const laptopModel = useGLTF("./models/robot.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += (targetRotation[0] - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (targetRotation[1] - ref.current.rotation.y) * 0.05;
      ref.current.rotation.z += (targetRotation[2] - ref.current.rotation.z) * 0.05;
    }
  });

  return (
    <primitive
      ref={ref}
      object={laptopModel.scene}
      position={[0, -2, 0]}
      scale={2}
    />
  );
};
