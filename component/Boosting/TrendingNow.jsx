import React from "react";
import { Grid } from "lucide-react";
import Image from "next/image";
import TitleBar from "../common/TitleBar";
import { useRouter } from "next/navigation";

const GameCard = ({ game, services }) => {
  const router = useRouter();

  return (
    <div
      className="relative group overflow-hidden rounded cursor-pointer"
      onClick={() => router.push(`/categories/${game.slug}/${services.slug}`)} // Navigate to the game category
    >
      {/* Background Image */}
      <div
        className="w-full h-28 bg-cover bg-center"
        style={{
          backgroundImage: game.image ? `url(${game.image})` : "none",
          backgroundColor: "#0E1237",
        }}
      />

      {/* Title */}
      <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center">
        <h3 className="text-white text-xl font-semibold">{game.name}</h3>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

const TopUpServices = ({ trendingData }) => {
  const displayedGames = trendingData.brands.slice(0, 14);

  return (
    <div className="bg-dark-300 pb-20 pt-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          {/* <h2 className="text-2xl font-bold w-fit text-slate-100 px-40 mb-6 pb-3 border-b-2 border-orange-300">
            Trending {service?.name}
          </h2> */}
          <TitleBar title={` Trending ${trendingData.service?.name}`} />
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {displayedGames?.map((game, index) => (
            <GameCard key={index} game={game} services={trendingData.service} />
          ))}

          {/* Show All Games Card */}
          <div className="relative rounded-lg pt-2 bg-[#0E1237] transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center">
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

export default TopUpServices;
