import React from "react";
import { Grid } from "lucide-react";
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

    {/* Overlay Gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" /> */}

    {/* Title */}
    <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center ">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>

    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0  transition-opacity duration-300" />
  </div>
);

const TopUpServices = () => {
  const games = [
    { title: "World of Warcraft", imageSrc: "/image/worldOfWarcraft.png" },
    { title: "Valorant", imageSrc: "/image/valorent.png" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    { title: "", imageSrc: "" },
    {
      title: "All Games",
      imageSrc: "/image/box.png",
      isViewAll: true,
    },
  ];

  return (
    <div className="bg-dark-300 pb-20 pt-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold w-fit text-slate-100 px-40 mb-6 pb-3 border-b-2 border-orange-300">
            Trending Top Up Services
          </h2>
          <div className="max-w-4xl mx-auto py-2  text-sm font-normal tracking-wide ">
            <p className="text-gray-400 mb-2">
              Discover the best in Top-Up services on our dedicated marketplace
              for gamers.
            </p>
            <p className="text-gray-400">
              Improve your gaming experience by seamlessly adding funds or
              in-game directly through our platform.
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {games.map((game, index) =>
            game.isViewAll ? (
              <div
                key={index}
                className="relative rounded-lg pt-6 bg-[#0E1237]  transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center"
              >
                <Image
                  src={game.imageSrc}
                  alt={game.title}
                  width={25}
                  height={25}
                  className="text-cyan-400"
                />
                <span className="text-white text-lg font-medium pt-2">
                  {game.title}
                </span>
              </div>
            ) : (
              <GameCard
                key={index}
                title={game.title}
                imageSrc={game.imageSrc}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TopUpServices;
