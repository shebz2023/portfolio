import React, { useState } from "react";


export const AboutDiv = ({onNameChange}) => {
  const [selectedName, setSelectedName] = useState("Aglaea");
  const handleClick = (name) => {
    setSelectedName(name);
    onNameChange(name);
  };

  const content = {
    Aglaea:
      "She was venerated as the goddess of beauty, splendor, glory, magnificence, and adornment. She is the youngest of the Charites according to Hesiod. Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct.",
    Thalia:
      "Thalia was venerated as the goddess of festivity, rich banquets, and blooming. She was the second of the Charites and often associated with laughter and grace.",
    Euphre:
      "Euphre was venerated as the goddess of good cheer, mirth, merriment, and joy. She was the third of the Charites, embodying the delight and good spirits of social gatherings.",
  };

  const getUnderlineStyle = () => {
    switch (selectedName) {
      case "Aglaea":
        return { left: "10%" };
      case "Thalia":
        return { left: "42%" };
      case "Euphre":
        return { left: "70%" };
      default:
        return { left: "5%" };
    }
  };

  return (
    <div className="text-white bg-black p-8 relative">
      <div className="flex gap-8 text-2xl font-josefin">
        <span
          onClick={() => handleClick("Aglaea")}
          className={`cursor-pointer hover:text-white transition-color duration-1000 ${
            selectedName === "Aglaea" ? "text-white" : "text-neutral-700"
          }`}
        >
          Aglaea
        </span>
        <span
          onClick={() => handleClick("Thalia")}
          className={`cursor-pointer transition-color hover:text-white duration-1000  ${
            selectedName === "Thalia" ? "text-white" : "text-neutral-700"
          }`}
        >
          Thalia
        </span>
        <span
          onClick={() => handleClick("Euphre")}
          className={`cursor-pointer transition-color hover:text-white duration-1000 ${
            selectedName === "Euphre" ? "text-white" : "text-neutral-700"
          }`}
        >
          Euphre
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
