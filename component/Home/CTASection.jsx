import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        backgroundImage: "url('/image/Cta.png')", // Set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Wave Background */}
      {/* <div className="absolute right-0 top-0 w-full ">
            <img
                src="/image/Cta.png"
                alt="game"
                className="absolute top-0 left-0 w-full  object-cover"
            />
        </div> */}

      {/* Content Container */}
      <div className=" mx-auto px-6 relative z-10 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-2xl font-bold text-white max-w-xl mx-auto">
            Are you a skilled gamer or dedicated supplier who wants to work with{" "}
            <span className="text-fuchsia-500 ">masterloot</span>?
          </h2>

          {/* CTA Button */}
          <div className="py-4">
            <button className="  text-black px-12 rounded py-2 text-xs font-semibold  bg-yellow-400 border border-yellow-400 ">
              START EARNING TODAY
            </button>
          </div>

          {/* Subtext */}
          <p className="text-amber-500 text-sm max-w-7xl tracking-wide font-semibold mx-auto">
            Become a part of our team with over 7000 online video gamers and
            suppliers who earn money by helping other gamers around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
