import React from 'react';
import { Shield, Clock, Award, DollarSign, Star } from 'lucide-react';
import Image from 'next/image';
import { IoStar } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/image/hero.jpg"
        alt="game"
        className="absolute top-0 left-0 h-full w-full object-cover"
        width={100}
        height={100}
      />
      <div className="max-w-7xl mx-auto pt-28 px-20  pb-20 relative z-10">
        {/* Tagline */}
        <p className="text-amber-400 text-sm font-semibold mb-4">
          Never give up, stay competitive and enjoy playing.
        </p>

        {/* Main heading */}
        <h1 className="text-white text-[40px] font-bold mb-4">
          Best marketplace for gamers
        </h1>

        {/* Subheading */}
        <h2 className="text-fuchsia-500 text-2xl font-bold mb-8">
          EXCELLENCE WINS
        </h2>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400">
            <Shield className="w-6 h-6 text-black" />
            <span className="text-black text-sm font-semibold">Secured</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400">
            <Clock className="w-6 h-6 text-black" />
            <span className="text-black text-sm font-semibold">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400">
            <Award className="w-6 h-6 text-black" />
            <span className="text-black text-sm font-semibold">Top Quality</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400">
            <DollarSign className="w-6 h-6 text-black" />
            <span className="text-black text-sm font-semibold">Fair Prices</span>
          </div>
        </div>

        {/* Trustpilot Rating */}
        {/* <div className="flex items-center gap-2">
          <span className="text-slate-300 font-semibold">Rated</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <IoStar key={i} className="w-5 h-5 p-[1px]  fill-current mx-0.5 bg-[#21A96F] text-slate-300" />
            ))}
          </div>
          <span className="text-slate-400">on reviews platform</span>
          <div className='flex justify-center items-center '>
            <IoStar  className="w-6 h-6 p-0.5  fill-current mx-0.5 text-[#21A96F]" />
            <text
              x="50"
              y="17"
              className="text-slate-300 text-sm pt-1 font-bold"
              textAnchor="middle"
            >
              Trustpilot
            </text>
          </div>
        </div> */}

        {/* Background Decorative Elements */}
        {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/20 to-transparent" /> */}
      </div>
    </div>
  );
};

export default HeroSection;