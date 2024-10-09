import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";

const IntroSection = () => {
  return (
    <>
      {" "}
      <div className="bg-[#F5F8FF] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl mx-auto text-center mt-80 mb-40">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We help your business grow faster.
          </h1>
          <p className="text-[#64607D] text-xl font-normal mb-16 max-w-2xl mx-auto">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon:"/tropy.png",
                title: "Offending belonging",
                description:
                  "Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.",
              },
              {
                icon:"/flowr.png",
                title: "Promotion & provision",
                description:
                  "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
              },
              {
                icon:"/sun.png",
                title: "Blessing application",
                description:
                  "Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] p-8 rounded-[20px] flex justify-start items-start flex-col gap-2"
              >
                 <Image src={item.icon} alt={item.title} width={80} height={80} />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <span className="text-left text-[#64607D] text-base">{item.description}</span>
                <a
                  href="#"
                  className="text-[#01966B] hover:underline text-base font-semibold"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
