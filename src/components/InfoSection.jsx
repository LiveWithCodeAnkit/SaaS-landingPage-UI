import React from "react";
import { Button } from "@/components/ui/button";
const InfoSection = () => {
  return (
    <div className="relative min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Background vectors */}
      <div className="absolute left-0 top-[180px] -translate-y-1/2 -translate-x-1/2 w-[228px] h-[228px] bg-gray-100 rounded-full" />
      <div className="absolute right-0 top-[180px] -translate-y-1/2 translate-x-1/2  w-[228px] h-[228px] bg-gray-100 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-orange-500 font-semibold mb-4">
          STOCKIE OPERATION ACROSS THE WORLD
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          We have best team and best process
        </h1>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>

        <div className="text-center mb-16">
          <Button className="bg-[#3734A9] text-white font-semibold py-2 px-6 rounded-full">
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-gray-300">
                    {num}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Project Discovery Call
                </h3>
                <p className="text-gray-600">
                  {num === 1 &&
                    "Party we years to order allow asked of. We so opinion friends me message as delight."}
                  {num === 2 &&
                    "His defective nor convinced residence own. Connection has put impossible own apartments boisterous."}
                  {num === 3 &&
                    "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
