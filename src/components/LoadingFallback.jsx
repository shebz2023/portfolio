import { Html } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";

export const LoadingFallback = () => {
  const words = ["software Enginneer", "Mobile developer" , "designer"];

  return (
    <Html center>
      <div className="text-[#f9f0ec] text-center text-xl max-md:text-sm font-josefin tracking-widest">
        <Typewriter words={words} loop={false} />
      </div>
    </Html>
  );
};
