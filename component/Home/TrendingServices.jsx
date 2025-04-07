import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import TitleBar from "../common/TitleBar";

const ServiceCard = ({ title, imageSrc, gameList = [], serviceSlug }) => {
  const router = useRouter(); 
   
  return (
    <div className="bg-dark-500 rounded overflow-hidden">
      {/* Header */}
      <div className="bg-yellow-400 p-4 flex justify-center items-center gap-3">
        <Image src={imageSrc} alt={title} width={25} height={25} />
        <h3 className="text-black text-sm font-bold">{title}</h3>
      </div>

      {/* Game List */}
      <div className="p-4 h-[50vh] overflow-auto custom-scrollbar">
        {gameList.map((game, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-teal-900/30 last:border-0"
          >
            <span className="text-white text-sm">{game.name}</span>
            <button
              className="bg-dark-500 border border-yellow-400 text-white font-extrabold text-[10px] px-2 py-1 rounded transition-colors hover:bg-yellow-400 hover:text-black"
              onClick={() =>
                router.push(`/categories/${game.slug}/${serviceSlug.slug}`)
              } // Navigate to the specific route
            >
              CHECK OFFERS
            </button>
          </div>
        ))}
      </div>

      {/* View All Link */}
      {gameList.length > 0 && (
        <div className="py-2 border-t border-yellow-400 z-30">
          <button className="text-[#FC25FB] transition-colors w-full text-center hover:text-[#FF57FF]">
            View All
          </button>
        </div>
      )}
    </div>
  );
};

const TrendingServices = ({
  skinGames,
  itemGames,
  gameCoinsGames,
  coachingGames,
}) => {
  const services = [
    {
      title: "Skins",
      imageSrc: "/image/skinblack.png",
      gameList: skinGames,
      serviceSlug: "skins",
    },
    {
      title: "Items",
      imageSrc: "/image/blackcube.png",
      gameList: itemGames,
      serviceSlug: "items",
    },
    {
      title: "Game Coins",
      imageSrc: "/image/blackcoins.png",
      gameList: gameCoinsGames,
      serviceSlug: "game-coins",
    },
    {
      title: "Coaching",
      imageSrc: "/image/blackcoaching.png",
      gameList: coachingGames,
      serviceSlug: "coaching",
    },
  ];

  return (
    <div className="bg-[#131746] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-center items-center">
          <TitleBar title={"Trending Game Services"} />
          <div className="max-w-5xl mx-auto font-normal tracking-wide py-2 text-sm">
            <p className="text-gray-400 mb-2 text-center">
              Check the forefront of trending game services section, showcasing
              the latest in-demand services that gamers are seeking.
            </p>
            <p className="text-gray-400 text-center">
              Stay ahead of the curve and explore the most popular and emerging
              services that set the trends in the gaming world.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              gameList={service.gameList.brands}
              serviceSlug={service.gameList.service} // Pass serviceSlug for navigation
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;
