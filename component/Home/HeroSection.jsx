import React from "react";
import { Shield, Clock, Award, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src="/image/hero.png"
        alt="game"
        className="absolute top-3 left-0 w-full object-cover"
        // width={100}
        // height={100}
      />
      <div className="max-w-7xl mx-auto pt-36 px-12 pb-28 relative z-10">
        {/* Tagline */}
        <p className="text-amber-400 text-base font-semibold mb-3">
          Never give up, stay competitive and enjoy playing.
        </p>

        {/* Main heading */}
        <h1 className="text-white text-5xl font-semibold mb-4">
          Best marketplace for gamers
        </h1>

        {/* Subheading */}
        <h2 className="text-fuchsia-500 text-3xl font-bold mb-8">
          EXCELLENCE WINS
        </h2>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-1 bg-yellow-400 rounded">
            <img
              src="/image/shield.png"
              alt="game"
              className="w-5  object-cover"
            />
            <span className="text-gray-800 text-xs font-bold">Secured</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-1 bg-yellow-400 rounded">
            <img
              src="/image/support.png"
              alt="game"
              className="w-5 object-cover"
            />
            <span className="text-gray-800 text-xs font-bold">
              24/7 Support
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 bg-yellow-400 rounded">
            <img
              src="/image/quality.png"
              alt="game"
              className=" w-5 object-cover"
            />
            <span className="text-gray-800 text-xs font-bold">Top Quality</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 bg-yellow-400 rounded">
            <img
              src="/image/prices.png"
              alt="game"
              className=" w-5 object-cover"
            />
            <span className="text-gray-800 text-xs font-bold ">
              Fair Prices
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
