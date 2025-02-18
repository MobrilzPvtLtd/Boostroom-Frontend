import Image from 'next/image';
import React from 'react';

const StepCard = ({ text }) => (
  <div className="bg-black/20 backdrop-blur-sm p-5 rounded-lg mb-4 hover:bg-[#042534] transition-colors duration-300 cursor-pointer ">
    <p className="text-gray-300 text-lg">{text}</p>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    "Browser our catalog and select a desired service",
    "Complete the payment to proceed with delivery",
    "The journey begins!",
    "Confirm the completion of your order"
  ];

  return (
    <div className="bg-[#042534] relative overflow-hidden ">
        <Image
            src="/image/testimonial.jpg"
            alt="game"
            className="absolute top-0 left-0 h-[100%] w-full object-cover"
            width={100}
            height={100}
        />

      <div className="max-w-7xl relative z-1 mx-auto  py-16"> 
          {/* Left Column - Text Content */}
          <div className="space-y-6 pb-6 px-20">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Optimized and easy to use
              </h2>
              <p className="text-amber-500 text-base">
                Find whatever you need within a few clicks at our gamer marketplace
              </p> 
          </div>
        </div>
        <div className='flex justify-evenly px-6'> 
            <div className="space-y-4 w-[40%] ">
                {steps.map((step, index) => (
                <StepCard key={index} text={step} />
                ))}
            </div>

            {/* Right Column - Empty space for potential image/illustration */}
            <div className="bg-black/20 rounded-md lg: w-[55%] ">
                {/* This space is left intentionally empty to match the layout */}
            </div>
        </div>
      </div>
 
    </div>
  );
};

export default HowItWorksSection;