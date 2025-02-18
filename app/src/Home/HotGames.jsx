import React from 'react';
import { Grid } from 'lucide-react';

const GameCard = ({ title, imageSrc }) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
    {/* Background Image */}
    <div 
      className="w-full h-28 bg-cover bg-center"
      style={{ 
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
        backgroundColor: '#03364B'
      }}
    />
    
    {/* Overlay Gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" /> */}
    
    {/* Title */}
    <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center ">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const HotGamesSection = () => {
  const games = [
    { title: 'World of Warcraft', imageSrc: '/image/worldOfWarcraft.jpg' },
    { title: 'Valorant', imageSrc: '/image/valorent.jpg' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { 
      title: 'All Games', 
      icon: <Grid className="w-8 h-8 text-cyan-400 mb-2" />,
      isViewAll: true 
    }
  ];

  return (
    <div className="bg-[#042534] pb-24 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold w-fit text-slate-300 px-40 mb-6 pb-3 border-b border-[#026062]">
            Hot Games
          </h2>
          <div className="max-w-5xl mx-auto py-2 ">
            <p className="text-gray-400 mb-2">
              Browse our selection of the most popular games, handpicked for their compatibility with our services.
            </p>
            <p className="text-gray-400">
              This section highlights titles that gamers frequently choose for game keys, in-game currency top-ups, leveling, and exclusive in-game content.
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {games.map((game, index) => (
            game.isViewAll ? (
              <div key={index} className="relative rounded-lg pt-6 bg-[#03364B] hover:bg-slate-800 transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center">
                {game.icon}
                <span className="text-white text-lg font-medium pt-2">{game.title}</span>
              </div>
            ) : (
              <GameCard
                key={index}
                title={game.title}
                imageSrc={game.imageSrc}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotGamesSection;