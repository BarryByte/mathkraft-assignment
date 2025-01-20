import React from "react";
import { MixedFraction } from "../game-state";

interface HeaderProps {
  fraction: MixedFraction;
}

const Header2 = ({ fraction }: HeaderProps) => {
  return (
    <div className="bg-[#e3f261] p-6 border-t-4 border-b-4 border-blue-600">
      <h1 className="text-4xl font-bold flex items-center justify-center gap-4">
        Convert
        <div className="bg-white px-4 py-2 inline-flex flex-col items-center border border-black">
          {/* Displaying Mixed Fraction */}
          {fraction.whole && (
            <span className="text-2xl font-bold">{fraction.whole}</span>
          )}
          <span>{fraction.numerator}</span>
          <div className="w-4 h-px bg-black" />
          <span>{fraction.denominator}</span>
        </div>
        this into a proper fraction
      </h1>
    </div>
  );
};

export default Header2;
