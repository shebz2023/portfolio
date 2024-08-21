import { Html } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";

export const LoadingFallback = () => {
  const words = ["software", "engineer"];

  return (
    <Html center>
      <div className="text-[#f9f0ec] text-center text-xl font-josefin tracking-widest">
        <Typewriter words={words} loop={false} />
      </div>
    </Html>
  );
};
