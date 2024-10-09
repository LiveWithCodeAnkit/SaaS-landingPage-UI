import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterTwo from "@/components/footerTwo";
import FooterLast from "@/components/FooterLast";
import InfoSection from "@/components/InfoSection";
import IntroSection from "@/components/IntroSection";
import BgInfo from "@/components/BgInfo";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="relative">
        <InfoSection />
        <div className="absolute inset-0 flex justify-center items-center lg:mt-[-50rem] md:mt-[-50rem] mt-[-130rem] p-2">
          <BgInfo />
        </div>
        <IntroSection />
        <div className="absolute inset-0 flex justify-center items-center xl:mt-[74rem] lg:mt-[50rem] md:mt-[100rem] mt-[69rem]">
          <button className="bg-[#4F46BA] text-white font-bold px-6 py-3 rounded transition duration-300">
            More About Platform
          </button>
        </div>
        <FeaturesSection />
      </div>

      <FooterTwo />
      <FooterLast />
    </>
  );
}
