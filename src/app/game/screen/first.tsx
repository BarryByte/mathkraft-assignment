import { useGameState } from "../state-utils";
import Header from "../components/header";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import TestButton from "../components/testButton";
import TestSelect from "../components/testSelect";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />

      {/* <Input 
        type="text" 
        placeholder="Enter your name" 
        value={inputValue} 
        onChange={handleChange} 
      />
      <p>Your entered name: {inputValue}</p>

      <TestButton/>
      <TestSelect/> */}
      <div className="flex flex-col items-center justify-center h-dvh bg-pink-100">
        {/* Title */}
        <div className="bg-yellow-300 px-6 py-4 rounded shadow-md border-4 border-black text-black font-bold text-2xl mb-8">
          Mixed number to improper fraction
        </div>

        {/* Level Card */}
        <div className="bg-white border-8 border-pink-500 p-10 rounded-xl flex flex-col items-center shadow-xl mb-8">
          <div className="text-pink-500 font-semibold text-2xl mb-4">
            Level 1
          </div>
          <div className="flex items-center text-black text-4xl font-bold">
            <span>3</span>
            <span className="flex flex-col items-center mx-4">
              <span>2</span>
              <span className="border-t-4 border-black w-full"></span>
              <span>4</span>
            </span>
            <span>=</span>
            <span className="flex flex-col items-center mx-4">
              <span>?</span>
              <span className="border-t-4 border-black w-full"></span>
              <span>?</span>
            </span>
          </div>
        </div>

        {/* Start Button */}
        <button className="bg-pink-500 text-white text-2xl font-bold py-4 px-12 rounded-lg shadow-lg border-b-8 border-black hover:bg-pink-600">
          START &gt;&gt;
        </button>
      </div>
    </div>
  );
}
