import { useGameState } from "../state-utils";
import { MixedFraction } from "../game-state";
import { useState } from "react";
import MixedFractionComponent from "../components/mixedFractionComponent";
import { Lock, LockIcon, LockKeyhole } from "lucide-react";
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
          {/* first box : quick way */}
          <div className="flex justify-center items-center h-40 bg-gray-100 ">
            <div className="flex w-2/6 h-30  border-4 border-[#FF497C] rounded-lg">
              <div className="flex-[1] bg-[#FF497C]  flex justify-center items-center flex-col text-4xl text-white">
                <span>Quick</span>
                <span>Way</span>
              </div>

              <div className="flex-[2] bg-white flex justify-center items-center rounded border-4 border-[#FF497C] rounded-l-lg">
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
                </div>
              </div>

              <div className="flex-[1] text-6xl bg-white flex justify-center items-center rounded-lg border-l-8 border-[#FF497C] ">
                🤔
              </div>
            </div>
          </div>

          {/* second box : lock */}
          <div className="flex h-32 w-5/12 justify-center items-center bg-[#FF497C] rounded-lg mx-auto p-3 gap-3 m-5">
            {/* Left Icon Section */}
            <div
              className={`flex-[1] flex items-center justify-center rounded-lg p-2 ${
                lock1State === "/lock_locked.svg" ? "bg-[#B40033]" : "bg-white"
              }`}
            >
              <img
                onClick={handleLock1}
                src={lock1State}
                alt="lock"
                className="h-12 w-12"
              />
            </div>

            {/* Text Section */}
            <div className="flex-[3] text-3xl px-3 text-center">
              Multiply denominator and wholes
            </div>

            {/* Fraction Image Section */}
            <div className="flex-[1] bg-white rounded-lg p-2">
              <img
                src="/fraction1.png"
                alt="fraction1"
                className="h-16 w-16 mx-auto"
              />
            </div>

            {/* Button Section */}
            <div className="flex-[1] bg-[#FF497C] text-white flex flex-col justify-center items-center p-2">
              <div className="mb-2 text-4xl font-bold text-center truncate">
                4 x 3
              </div>
              <div className="relative m-2 w-full max-w-[80%]">
                <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
                <div className="relative bg-white px-4 py-2 rounded-lg">
                  <div className="text-black text-2xl font-bold text-center">
                    ?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third box : fraction */}
          {!lock1 && (
            <div className="flex flex-col justify-center items-center ">
              <div className="flex h-34 w-5/12 justify-center items-center bg-[#FF497C] rounded-lg mx-auto p-3 gap-3 m-5">
                {/* lock Section */}
                <div
                  className={`flex-[1] flex items-center justify-center rounded-lg p-2 ${
                    lock2State === "/lock_locked.svg"
                      ? "bg-[#B40033]"
                      : "bg-white"
                  }`}
                >
                  <img
                    onClick={handleLock2}
                    src={lock2State}
                    alt="lock"
                    className="h-12 w-12"
                  />
                </div>

                {/* Text Section */}
                <div className="flex-[3] text-3xl px-2 py-5 text-center">
                  Add the numberator, denominator remains same
                </div>

                {/* Fraction Image Section */}
                <div className="flex-[1] bg-white rounded-lg p-2">
                  <img
                    src="/12-2-4.svg"
                    alt="fraction-2"
                    className="h-16 w-16 mx-auto"
                  />
                </div>

                {/* ? Section */}
                <div className="flex-[1] bg-[#FF497C] text-white flex flex-col justify-center items-center p-2">
                  <div className="mb-1 text-3xl text-transparent">4 x 3</div>
                </div>
              </div>
              {/* this should overlap on third box */}
              {!lock2 ? (
                <RedFraction numerator={12} denominator={4} text={false}/>
              ) : (
                <RedFraction numerator={"?"} denominator={"?"} text={true} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
