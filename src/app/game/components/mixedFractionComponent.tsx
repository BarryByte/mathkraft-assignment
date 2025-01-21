import React from "react";

const MixedFractionComponent = ({ whole, numerator, denominator }) => {
  return (
    <div className="flex items-center text-black text-6xl font">
      <span>{whole}</span>
      <span className="flex flex-col items-center mx-4">
        <span>{numerator}</span>
        <span className="border-t-4 border-black w-full"></span>
        <span>{denominator}</span>
      </span>
    </div>
  );
};

export default MixedFractionComponent;
