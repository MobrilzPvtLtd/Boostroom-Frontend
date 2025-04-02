import React from "react";
import Image from "next/image";

const GameCard = ({ title, imageSrc }) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
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

const GiftCardSection = ({ giftCards }) => {
  // Limit to top 14 gift cards
  const displayedGiftCards = giftCards.slice(0, 14);

  return (
    <div className="bg-dark-300 pb-20 pt-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold w-fit text-slate-100 px-40 mb-6 pb-3 border-b border-orange-300">
            Trending Gift Cards
          </h2>
          <div className="max-w-5xl mx-auto py-2 font-normal tracking-wide text-sm">
            <p className="text-gray-400 mb-2">
              Explore our comprehensive selection of gift cards in the ultimate
              marketplace for gamers.
            </p>
            <p className="text-gray-400">
              Our marketplace offers a wide variety of gift cards for your
              favorite online video games, ensuring you get exactly what you
              need.
            </p>
          </div>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {displayedGiftCards.map((card, index) => (
            <GameCard key={index} title={card.name} imageSrc={card.image} />
          ))}

          {/* Show All Gift Cards Card */}
          <div
            className="relative rounded-lg pt-6 bg-dark-500 transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center"
          >
            <Image
              src="/image/box.png" // Replace with the correct path for the "Show All Gift Cards" image
              alt="Show All Gift Cards"
              width={25}
              height={25}
              className="text-cyan-400"
            />
            <span className="text-white text-lg font-medium pt-2">
              All Gift Cards
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardSection;