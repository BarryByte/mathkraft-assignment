import { useGameState } from "../state-utils";
import MixedFractionComponent from "../components/mixedFractionComponent";
import { useState } from "react";

export default function ThirdScreen() {
  const { gameStateRef } = useGameState();
  const { step, mixedFraction1, mixedFraction2 } = gameStateRef.current.state3;

  const [numerator1, setNumerator1] = useState<number | undefined>(undefined);
  const [denominator1, setDenominator1] = useState<number | undefined>(
    undefined
  );
  const [numerator2, setNumerator2] = useState<number | undefined>(undefined);
  const [denominator2, setDenominator2] = useState<number | undefined>(
    undefined
  );

  const [showHint1, setShowHint1] = useState(false);
  const [showHint2, setShowHint2] = useState(false);

  const handleHint1 = () => {
    setShowHint1(!showHint1);
  };

  const handleHint2 = () => {
    setShowHint2(!showHint2);
  };

  return (
    <div className=" min-h-screen flex flex-col items-center py-8">
      <h1 className="text-pink-500 text-5xl font mb-8">
        Let’s do some more now!
      </h1>
      <div className="grid grid-cols-3 gap-6 w-11/12 max-w-4xl">
        {/* First row */}
        <div className="border flex flex-col">
          <div
            className="bg-[#fea9c0] p-2 text-center flex items-center justify-center"
            style={{ height: "60px" }}
          >
            <div className="text-3xl font-bold">Mixed Form</div>
          </div>
          <div className="bg-[#fed3dd] flex-grow flex flex-col items-center justify-center p-4">
            <div className="bg-white p-2 border border-black">
              <MixedFractionComponent
                numerator={mixedFraction1.numerator}
                denominator={mixedFraction1.denominator}
                whole={mixedFraction1.whole}
              />
            </div>
          </div>
        </div>

        <div className="border flex flex-col">
          <div
            className="bg-[#fea9c0] p-4 text-center flex items-center justify-center"
            style={{ height: "60px" }}
          >
            <div className="text-3xl font-bold">Improper Form</div>
          </div>
          <div className="bg-[#fed3dd] border p-4 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="relative m-2 w-full max-w-[22%]">
                <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
                <div className="relative bg-white px-1 py-2 rounded-lg">
                  <input
                    type="text"
                    value={numerator1 ?? ""}
                    onChange={(e) => setNumerator1(Number(e.target.value))}
                    className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                  />
                </div>
              </div>
              <hr className="w-[25%] border-t-2 border-black" />
              <div className="relative m-2 w-full max-w-[22%]">
                <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
                <div className="relative bg-white px-1 py-2 rounded-lg">
                  <input
                    type="text"
                    value={denominator1 ?? ""}
                    onChange={(e) => setDenominator1(Number(e.target.value))}
                    className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border flex flex-col">
          <div
            className="bg-[#f7e4d6] p-4 text-center flex items-center justify-center"
            style={{ height: "60px" }}
          >
            <div className="text-3xl font-bold">Hint</div>
          </div>

          <div className="bg-[#f4d7c5] flex-grow flex flex-col items-center justify-center p-4">
            {showHint1 ? (
              <img
                src="./2-1-5.svg"
                alt="Hint"
                className="w-30 h-30 p-3 bg-white rounded-xl border-4"
                style={{ borderColor: "#AD4600" }}
              />
            ) : (
              <div className="relative m-2 ">
                <div className="absolute -left-1 -bottom-1 w-full h-full bg-black"></div>
                <div className="relative bg-white px-5 py-1">
                  <button
                    onClick={handleHint1}
                    className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                  >
                    See Hint
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Second row */}
        <div className="bg-[#fed3dd] border p-4 flex flex-col items-center justify-center">
          <div className="bg-white p-2 border border-black">
            <MixedFractionComponent
              numerator={mixedFraction2.numerator}
              denominator={mixedFraction2.denominator}
              whole={mixedFraction2.whole}
            />
          </div>
        </div>

        <div className="bg-[#fed3dd] border p-4 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="relative m-2 w-full max-w-[22%]">
              <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
              <div className="relative bg-white px-1 py-2 rounded-lg">
                <input
                  type="text"
                  value={numerator2 ?? ""}
                  onChange={(e) => setNumerator2(Number(e.target.value))}
                  className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                />
              </div>
            </div>
            <hr className="w-[25%] border-t-2 border-black" />
            <div className="relative m-2 w-full max-w-[22%]">
              <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
              <div className="relative bg-white px-1 py-2 rounded-lg">
                <input
                  type="text"
                  value={denominator2 ?? ""}
                  onChange={(e) => setDenominator2(Number(e.target.value))}
                  className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f4d7c5] border p-6 flex flex-col items-center justify-center">
          {showHint2 ? (
            <img
              src="./3-4-2-t1.png"
              alt="Hint"
              className="w-25 h-25 p-5 bg-white rounded-xl border-4"
              style={{ borderColor: "#AD4600" }}
            />
          ) : (
            <div className="relative m-2">
              <div className="absolute -left-1 -bottom-1 w-full h-full bg-black"></div>
              <div className="relative bg-white px-6 py-2">
                <button
                  onClick={handleHint2}
                  className="text-black text-2xl font-bold text-center w-full bg-transparent border-none outline-none"
                >
                  See Hint
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
