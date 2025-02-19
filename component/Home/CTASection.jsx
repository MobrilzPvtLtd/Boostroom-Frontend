import Image from 'next/image';
import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-[#042534] relative overflow-hidden py-24">
      {/* Decorative Wave Background */}
        <div className="absolute right-0 top-0 w-full h-full">
            <Image
                src="/image/Cta.jpg"
                alt="game"
                className="absolute top-0 left-0 h-full w-full object-cover"
                width={100}
                height={100}
            />
        </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-[ 3rem]">
            Are you a skilled gamer or dedicated supplier who wants to work with{' '}
            <span className="text-teal-400">boostroom</span>?
          </h2>

          {/* CTA Button */}
          <div>
          <button className="  text-white px-12 py-2 text-sm font-semibold  bg-[#017F7B] border border-[#00D09E] hover:bg-emerald-600 transition-colors">
              START EARNING TODAY
            </button>
          </div>

          {/* Subtext */}
          <p className="text-amber-500 text-lg max-w-6xl mx-auto">
            Become a part of our team with over 7000 online video gamers and suppliers who earn money by helping other gamers around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;