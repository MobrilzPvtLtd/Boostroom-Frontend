import Image from 'next/image';
import React from 'react';

const LevelingSection = () => {
  return (
    <div className="relative bg-teal-950 mt-16 py-16">
      {/* Wave Background */}
      <Image
        src="/image/levelingbg.jpg"
        alt="game"
        className="absolute top-0 left-0 h-full w-full object-cover"
        width={100}
        height={100}
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-12 ">
          {/* Left Content */}
          <div className="flex-1 ">
            {/* Title with Level Up Icon */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-4xl font-bold text-white">Leveling</h2>  
                <div className="flex justify-center mt-0.5">
                  <Image
                    src="/image/leveling.jpg"
                    alt="Right gaming setup"
                    width={100}
                    height={100}
                    layout="responsive"
                    className="object-cover "
                    priority
                  /> 
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
            Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Sup-port. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience has-sle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere!
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-60 w-60  my-4">
            <Image
              src="/image/level_pic.jpg"
              alt="Right gaming setup"
              width={200}
              height={200}
              layout="responsive"
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelingSection;