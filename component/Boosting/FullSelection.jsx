import React from "react";
import TitleBar from "../common/TitleBar";
import { useRouter } from "next/navigation";

const GameCard = ({ game, service }) => {
  const router = useRouter();

  return (
    <div
      className="relative group overflow-hidden rounded cursor-pointer"
      onClick={() => router.push(`/categories/${game.slug}/${service.slug}`)} // Navigate to the game category
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

const FullSelection = ({ fullSelectionData }) => {
  const { service, brands } = fullSelectionData;

  // Group brands by the first letter of their name
  const groupedBrands = brands.reduce((acc, brand) => {
    const firstLetter = brand.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {});

  // Sort the letters alphabetically
  const availableLetters = Object.keys(groupedBrands).sort();

  return (
    <div className="bg-dark-300 min-h-screen p-12">
      <div className="text-center mb-12 flex flex-col justify-center items-center">
        <TitleBar title={`All ${service?.name}`} />
      </div>
      <div className="max-w-7xl mx-auto space-y-8">
        {availableLetters.map((letter) => (
          <section key={letter} className="space-y-4">
            <h2 className="rounded-md text-base font-semibold border border-yellow-400 w-fit px-4 text-yellow-400">
              {letter}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {groupedBrands[letter].map((brand) => (
                <GameCard
                  key={brand.id}
                  game={brand}
                  service={service}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FullSelection;
