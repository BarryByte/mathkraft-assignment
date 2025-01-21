import { useGameState } from "../state-utils";
import { MixedFraction } from "../game-state";
import { useState } from "react";
import MixedFractionComponent from "../components/mixedFractionComponent";
import RedFraction from "../components/redFraction";

interface HeaderProps {
  mixedFraction: MixedFraction;
}
export default function SecondScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const { gameStateRef } = useGameState();
  const { step, mixedFraction } = gameStateRef.current.state2;
  const [lock1, setLock1] = useState(true);
  const [lock1State, setLock1State] = useState("/lock_locked.svg");
  const [lock2, setLock2] = useState(true);
  const [lock2State, setLock2State] = useState("/lock_locked.svg");

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleLock1 = () => {
    if (lock1) {
      setLock1(false);
      setLock1State("/lock_unlocked.svg");
    } else {
      setLock1(true);
      setLock1State("/lock_locked.svg");
      setLock2(true);
      setLock2State("/lock_locked.svg");
    }
  };
  const handleLock2 = () => {
    if (lock2) {
      setLock2(false);
      setLock2State("/lock_unlocked.svg");
    } else {
      setLock2(true);
      setLock2State("/lock_locked.svg");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6F6] flex flex-col items-center p-6">
      {currentStep === 1 && (
        <div className="flex flex-col items-center w-[40%]">
          <div className="bg-white border-8 border-[#FF497C] w-full flex flex-col md:flex-row items-center text-6xl">
            <div className="flex flex-[1] text-[#FF497C] border-r-8 md:border-b-0 border-[#FF497C] px-8 py-14 md:h-full">
              Quick Hack
            </div>

            <div className="flex flex-[2] flex-col md:flex-row items-center justify-center text-black mt-8 md:mt-0 md:ml-20">
              <MixedFractionComponent {...mixedFraction} />
              <span className="mx-4">=</span>
              <div className="flex flex-col items-center mx-8 text-5xl">
                <span>?</span>
                <span className="border-t-8 border-black w-full"></span>
                <span>?</span>
              </div>
            </div>
          </div>

          <div className="mt-12 border-8 border-[#FF497C] w-full px-16 py-6 text-[#FF497C] text-4xl md:text-6xl bg-white shadow-lg  justify-center items-center flex">
            A quicker way
          </div>

          <button className="relative mt-12 text-3xl" onClick={nextStep}>
            <div className="absolute -left-2 -bottom-2 w-full h-full bg-black"></div>
            <div className="relative border-8 border-[#FF497C] bg-white px-12 py-4 text-[#FF497C] font-bold hover:bg-pink-200 transition">
              Try &gt;&gt;
            </div>
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="w-full max-w-3xl">
          <div
            className="text-[#FF497C] text-xl font-bold cursor-pointer mb-4"
            onClick={previousStep}
          >
            Back &lt;&lt;
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center bg-[#FF497C] p-1 rounded-lg border-4 border-[#FF497C] mb-6">
            <div className="bg-[#FF497C] text-white text-4xl p-4 flex flex-col items-center rounded-md">
              Quick Way
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-between text-black text-3xl font-bold mx-4 w-3/4 bg-white rounded-lg">
              <div className=" flex w-2/3 justify-evenly rounded-lg">
                <MixedFractionComponent {...mixedFraction} />

                <div className="flex flex-col items-center justify-center  mx-4">
                  <span className="text-7xl">=</span>
                </div>
                <div className="flex flex-col items-center justify-center mx-4 text-5xl">
                  <span>?</span>
                  <span className="border-t-4 border-black w-full"></span>
                  <span>?</span>
                </div>
              </div>

              <div className="flex items-center justify-center w-1/3 text-center  border-l-4 border-[#FF497C] rounded-xl text-6xl">
                🤔
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-[#FF497C] p-4 rounded-lg mb-6">
            <div
              className={`p-3 rounded-lg ${
                lock1 ? "bg-[#B40033]" : "bg-white"
              }`}
              onClick={handleLock1}
            >
              <img
                src={lock1State}
                alt="lock"
                className="h-12 w-12 cursor-pointer"
              />
            </div>
            <div className="flex-1 text-2xl text-center px-4">
              Multiply denominator and whole number
            </div>
            <div className="bg-white p-3 rounded-lg">
              <img src="/fraction1.png" alt="fraction" className="h-16 w-16" />
            </div>
            <div className="text-white text-3xl p-4 ml-4"> {mixedFraction.denominator * mixedFraction.whole} </div>
          </div>

          {!lock1 && (
            <div className="flex flex-col md:flex-row items-center bg-[#FF497C] p-4 rounded-lg mb-6 ">
              <div
                className={`p-3 rounded-lg ${
                  lock2 ? "bg-[#B40033]" : "bg-white"
                }`}
                onClick={handleLock2}
              >
                <img
                  src={lock2State}
                  alt="lock"
                  className="h-12 w-12 cursor-pointer"
                />
              </div>
              <div className="flex-1 text-2xl text-center px-4">
                Add numerator, denominator remains same
              </div>
              <div className="bg-white p-3 rounded-lg">
                <img src="/12-2-4.svg" alt="fraction" className="h-16 w-16" />
              </div>
              <div className="text-[#FF497C] text-3xl p-4">12.....</div>
            </div>
          )}

          {!lock1 && (
            <>
              {!lock2 ? (
                <div className="w-full flex justify-start ml-4">
                  <RedFraction numerator={12} denominator={4} text={false} />
                </div>
              ) : (
                <div className="w-full flex justify-start ml-4">
                  <RedFraction numerator={"?"} denominator={"?"} text={true} />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
