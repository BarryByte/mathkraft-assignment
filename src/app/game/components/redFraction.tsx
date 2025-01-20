import React from "react";

const RedFraction = ({ numerator, denominator, text }) => {
  return (
    <div className="rounded-2xl bg-[#C50037] w-5/12 p-3 m-5 -mt-9 flex items-center justify-center flex-row">
      <div className="flex items-center justify-center flex-col">

        <div>
          <div className="flex-[1] bg-[#C50037] text-white flex flex-col justify-center items-center p-2">
            <div className="relative m-2 w-full max-w-[80%]">
              <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
              <div className="relative bg-white px-4 py-2 rounded-lg">
                <div className="text-black text-2xl font-bold text-center">
                  {numerator}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>-------</div>

        <div>
          <div className="flex-[1] bg-[#C50037] text-white flex flex-col justify-center items-center p-2">
            <div className="relative m-2 w-full max-w-[80%]">
              <div className="absolute -left-1 -bottom-1 w-full h-full bg-black rounded-lg"></div>
              <div className="relative bg-white px-4 py-2 rounded-lg">
                <div className="text-black text-2xl font-bold text-center">
                  {denominator}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div>
        {!text && (
          <div className="text-3xl text-white">We get the same answer as with pies</div>
        )}
      </div>
    </div>
  );
};

export default RedFraction;
