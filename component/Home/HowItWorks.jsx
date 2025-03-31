import Image from "next/image";
import React, { useState } from "react";

const StepCard = ({ text, isSelected, onClick }) => (
  <div
    className={`bg-dark-500 backdrop-blur-sm p-4 rounded transition-colors duration-300 text-sm cursor-pointer ${
      isSelected
        ? "bg-yellow-400 text-black"
        : "text-slate-300 hover:bg-yellow-400 hover:text-black"
    }`}
    onClick={onClick}
  >
    <p className="text-lg">{text}</p>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    "Browse our catalog and select a desired service",
    "Complete the payment to proceed with delivery", 
    "The journey begins!",
    "Confirm the completion of your order",
  ];

  // State to track the selected step (default is the first step)
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        backgroundImage: "url('/image/testimonial.png')", // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img
        src="/image/testimonial.png"
        alt="game"
        className="absolute top-0 left-0 w-full object-cover"
      /> */}

      <div className="max-w-7xl relative z-1 mx-auto py-16">
        {/* Left Column - Text Content */}
        <div className="space-y-6 pb-10 px-20">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white">
              Optimized and easy to use
            </h2>
            <p className="text-yellow-500 text-sm font-semibold">
              Find whatever you need within a few clicks at our gamer
              marketplace
            </p>
          </div>
        </div>
        <div className="flex justify-evenly px-6">
          <div className="space-y-4 w-[40%] ">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                text={step}
                isSelected={selectedStep === index} // Highlight if selected
                onClick={() => setSelectedStep(index)} // Update selected step
              />
            ))}
          </div>

          {/* Right Column - Empty space for potential image/illustration */}
          <div className=" rounded-md lg: w-[55%] "
          style={{
            backgroundImage: "url('/image/sidephoto.jpg')", // Set the background image
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            {/* <img
              src="/image/sidephoto.jpg"
              alt="game"
              className="w-full object-cover"
            /> */}
            {/* This space is left intentionally empty to match the layout */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
