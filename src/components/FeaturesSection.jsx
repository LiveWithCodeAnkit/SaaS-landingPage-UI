import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const FeatureCard = ({ title, description, buttonText }) => (
  <div className="bg-gray-100 p-8 rounded-3xl flex flex-col justify-center items-center">
    <h3 className="text-3xl font-bold mb-4 text-center max-w-[388px]">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 text-center">{description}</p>
    <button className="bg-[#4F46BA] text-white font-bold px-6 py-3 rounded transition duration-300">
      {buttonText}
    </button>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-6">
        <div className="bg-white rounded-3xl shadow-lg p-10 flex  flex-col md:flex-row justify-center items-center">
          <h2 className="text-4xl font-bold">Among leave law built now.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "/starlogo.png", title: "Village did remov enjoyed" },
              { icon: "/Frame.png", title: "Nay likely length sooner" },
              { icon: "/lightlogo.png", title: "Expense windows adapted" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#E9ECF2] p-4 rounded mr-4">
                  <Image
                    src={item.icon}
                    width={80}
                    height={80}
                    alt={item.title}
                  />
                  {/* <span className="text-2xl">{item.icon}</span> */}
                </div>
                <p className="text-lg text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            title="Offend belong promote provision"
            description="Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income."
            buttonText="Read More"
          />
          <FeatureCard
            title="Consulted ourselves it blessing welcom"
            description="The expense windows adapted sir. Wrong widen drawn ample eat off doors money."
            buttonText="Read More"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
