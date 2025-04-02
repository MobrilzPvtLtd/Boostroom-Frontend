import React from "react";
import Image from "next/image";

const GameCard = ({ title, imageSrc }) => (
  <div className="relative group overflow-hidden rounded cursor-pointer">
    {/* Background Image */}
    <div
      className="w-full h-28 bg-cover bg-center"
      style={{
        backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
        backgroundColor: "#0E1237",
      }}
    />

    {/* Title */}
    <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center ">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>

    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity duration-300" />
  </div>
);

const HotGamesSection = ({ hotBoostingGames }) => {
  // Limit to top 14 games
  const displayedGames = hotBoostingGames.slice(0, 14);

  return (
    <div className="bg-[#131746] pb-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold w-fit text-slate-100 px-40 mb-6 pb-3 border-b-2 border-[#8F7326]">
            Hot Boosting Games
          </h2>
          <div className="max-w-5xl mx-auto py-2 text-sm font-normal tracking-wide">
            <p className="text-gray-400 mb-2">
              Browse our selection of the most popular games, handpicked for
              their compatibility with our services.
            </p>
            <p className="text-gray-400">
              This section highlights titles that gamers frequently choose for
              game keys, in-game currency top-ups, leveling, and exclusive
              in-game content.
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {displayedGames.map((game, index) => (
            <GameCard key={index} title={game.name} imageSrc={game.image} />
          ))}

          {/* Show All Games Card */}
          <div
            className="relative rounded-lg pt-2 bg-[#0E1237] transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center"
          >
            <Image
              src="/image/box.png" // Replace with the correct path for the "Show All Games" image
              alt="Show All Games"
              width={25}
              height={25}
              className="text-cyan-400"
            />
            <span className="text-white text-sm font-medium pt-2">
              Show All Games
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotGamesSection;
