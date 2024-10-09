import React from "react";
import Image from 'next/image'
const BgInfo = () => {
  return (
    <>
      <div className="relative lg:max-w-[830px] lg:max-h-[400px] min-w-1/2 h-[300px] rounded-2xl flex items-center justify-center overflow-hidden">
        <Image
          src="/bgytwo.png"
          alt="Business people shaking hands"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white lg:p-24 p-4">
          <h1 className="text-2xl sm:text-5xl md:text-4xl font-bold mb-4">
            Push your product to next level.
          </h1>
          <p className="text-lg sm:text-lg mb-8 max-w-xl mx-auto">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <button className="bg-[#3734A9] text-white font-semibold py-3 px-8 rounded-full text-base  transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default BgInfo;
