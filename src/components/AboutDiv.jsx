import React, { useState } from "react";

export const AboutDiv = ({ onNameChange }) => {
  const [selectedName, setSelectedName] = useState("English");
  const handleClick = (name) => {
    setSelectedName(name);
    onNameChange(name);
  };

  const content = {
    English:
      "As a dedicated software engineer, I strive to create reliable, efficient, and user-friendly digital solutions that make a positive impact on people's lives",
    French:
      "En tant qu'ingénieur logiciel dévoué, je m'efforce de créer des solutions numériques fiables, efficaces et conviviales qui ont un impact positif sur la vie des gens",
    Dutch:
      "Als toegewijde software-ingenieur streven ik ernaar om betrouwbare, efficiënte en gebruiksvriendelijke digitale oplossingen te creëren die een positieve impact hebben op het leven van mensen",
  };

  const getUnderlineStyle = () => {
    switch (selectedName) {
      case "English":
        return { left: "10%" };
      case "French":
        return { left: "42%" };
      case "Dutch":
        return { left: "70%" };
      default:
        return { left: "5%" };
    }
  };

  return (
    <div className="text-white bg-black p-8 relative">
      <div className="flex gap-8 text-2xl font-josefin">
        <span
          onClick={() => handleClick("English")}
          className={`cursor-pointer hover:text-white transition-color duration-1000 ${
            selectedName === "English" ? "text-white" : "text-neutral-700"
          }`}
        >
          English
        </span>
        <span
          onClick={() => handleClick("French")}
          className={`cursor-pointer transition-color hover:text-white duration-1000  ${
            selectedName === "French" ? "text-white" : "text-neutral-700"
          }`}
        >
          French
        </span>
        <span
          onClick={() => handleClick("Dutch")}
          className={`cursor-pointer transition-color hover:text-white duration-1000 ${
            selectedName === "Dutch" ? "text-white" : "text-neutral-700"
          }`}
        >
          Dutch
        </span>
      </div>
      <div
        className="mt-4 mb-4 w-12 h-0.5 bg-white absolute"
        style={getUnderlineStyle()}
      />
      <div className="mt-8">
        <p className="text-neutral-400 text-sm leading-5 font-josefin">
          {content[selectedName]}
        </p>
      </div>
    </div>
  );
};
