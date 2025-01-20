import { useGameState } from "../state-utils";
import { initialGameState } from "../game-state";
import { MixedFraction } from "../game-state";
import Header2 from "../components/header2";
import { useState } from "react";
import { FaLock } from "react-icons/fa";

import MixedFractionComponent from "../components/mixedFractionComponent";
import { Lock, LockIcon } from "lucide-react";
interface HeaderProps {
  mixedFraction: MixedFraction;
}
export default function SecondScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const { gameStateRef } = useGameState();
  const { step, mixedFraction } = gameStateRef.current.state2;

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div>
      {currentStep === 1 && (
        <div className="bg-pink-100 flex flex-col items-center justify-center min-h-screen p-6">
          <div className=" bg-white flex items-center border-4 border-[#FF497C] p-4 w-fit">
            <div className="flex items-center border-r-4 border-[#FF497C] px-4 py-2 text-[#FF497C] font-bold text-4xl h-full">
              Quick Hack
            </div>

            <div className="flex items-center text-black text-4xl font-bold ml-10">
              <MixedFractionComponent
                whole={mixedFraction.whole}
                numerator={mixedFraction.numerator}
                denominator={mixedFraction.denominator}
              />
              <span>=</span>
              <span className="flex flex-col items-center mx-4">
                <span>?</span>
                <span className="border-t-4 border-black w-full"></span>
                <span>?</span>
              </span>
            </div>
          </div>

          <button className="mt-6  border-4 border-[#FF497C] px-24 py-3 text-[#FF497C] font-bold text-4xl bg-white shadow-lg hover:bg-pink-200 transition">
            A quicker way
          </button>

          <button className="relative mt-9">
            <div className="absolute -left-1 -bottom-1 w-full h-full bg-black "></div>
            <div className="relative border-4 border-[#FF497C] bg-white px-8 py-2 ">
              <div
                className="text-[#FF497C] text-xl font-bold"
                onClick={nextStep}
              >
                Try &gt;&gt;
              </div>
            </div>
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <div
            className="text-[#FF497C] text-xl font-bold"
            onClick={previousStep}
          >
            Back &lt;&lt;
          </div>
          <div className="flex flex-col items-center justify-center  bg-pink-50 p-4 space-y-6">
            {/* Top Card */}
            <div className="max-w-2xl bg-[#FF497C] rounded-2xl flex overflow-hidden flex-row items-center justify-between">
              {/* Quick Hack section */}
              <div className="flex-1 text-white p-6 font text-4xl">
                <div>Quick</div>
                <div>Hack</div>
              </div>
              {/* fraction ?? */}
              <div className="flex-2 flex items-center px-12 justify-between text-black text-4xl font-bold bg-white rounded-lg">
                <MixedFractionComponent
                  whole={mixedFraction.whole}
                  numerator={mixedFraction.numerator}
                  denominator={mixedFraction.denominator}
                />
                <span>=</span>
                <span className="flex flex-col items-center mx-4">
                  <span>?</span>
                  <span className="border-t-4 border-black w-full"></span>
                  <span>?</span>
                </span>

                <div className="flex-1 h-28 flex items-center justify-center bg-white rounded-lg border-l-4  border-[#FF497C] ">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl">
                    🤔
                  </div>
                </div>
              </div>

              {/* Emoji section */}
            </div>

            {/* next card */}
            <div className="bg-[#FF497C] rounded-2xl flex overflow-hidden flex-row items-center justify-between">
              <div>
                <LockIcon />
              </div>
              <div>Mulitiply denominator and wholes</div>
              <div>wow</div>
              <div className="">
                <div>4 x 3 </div>
                <div> ? </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
