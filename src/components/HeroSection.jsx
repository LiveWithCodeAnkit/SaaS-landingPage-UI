import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <section className="py-12  bg-white border-b-[1px] border-t-[1px]">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-[22px]  mb-8 font-semibold">
            Over 32k+ software businesses growing with AR Shakir
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image src={`/zepp.png`} alt={"zepp"} width={120} height={60} />
            <Image src={`/oracle.png`} alt={"oracle"} width={120} height={60} />
            <Image
              src={`/morpheus.png`}
              alt={"morpheus"}
              width={120}
              height={60}
            />
             <Image src={`/samsung.png`} alt={"samsung"} width={120} height={60} />
             <Image src={`/monday.png`} alt={"monday"} width={120} height={60} />
            <Image src={`/segment.png`} alt={"segment"} width={120} height={60} />
            <Image src={`/portnet.png`} alt={"portnet"} width={120} height={60} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
