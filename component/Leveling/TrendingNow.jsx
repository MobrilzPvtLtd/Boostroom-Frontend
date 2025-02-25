import { Search } from 'lucide-react';
import React from 'react'
 

const GameCard = ({ title, imageSrc, checkOffers }) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
    {/* Background Image */}
    <div 
      className="w-full h-28 bg-cover bg-center"
      style={{ 
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
        backgroundColor: '#0E1237'
      }}
    />
    
    {/* Overlay Gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" /> */}
    
    {/* Title */}
    <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center ">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
    {checkOffers && (
      <div className="absolute bottom-0 right-0  p-2 flex justify-center ">
        <h3 className="text-white text-[9px] bg-[#017F7A] py-1 px-2 font-semibold">CHECK OFFERS</h3>
      </div>
    )}
    
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0  transition-opacity duration-300" />
  </div>
);

const TrendingNews = () => {
  const games = [
    { title: 'World of Warcraft', imageSrc: '/image/worldOfWarcraft.jpg', checkOffers: true },
    { title: '', imageSrc: '' , checkOffers: false },
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},
    { title: '', imageSrc: ''  , checkOffers: false},

   
  ];

  return (
    <div className="bg-dark-300 py-16 px-12"> 
      {/* <div className="flex-1 max-w-full ">
          <div className="relative">
            <input
              type="text"
              placeholder="Find desired game"
              className="w-full text-sm bg-[#03364B] text-gray-300 pl-16 pr-4 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="absolute top-3 left-7 h-6 w-6 text-gray-400" />
          </div> 
      </div> */}
      <div className="max-w-7xl mx-auto pt-10">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold w-fit text-white px-40 mb-6 pb-3 border-b border-orange-300">
           Trending Boosting
          </h2>
          {/* <div className="max-w-5xl mx-auto py-2 ">
            <p className="text-gray-400 mb-2">
              Browse our selection of the most popular games, handpicked for their compatibility with our services.
            </p>
            <p className="text-gray-400">
              This section highlights titles that gamers frequently choose for game keys, in-game currency top-ups, leveling, and exclusive in-game content.
            </p>
          </div> */}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {games.map((game, index) => (
            game.isViewAll ? (
              <div key={index} className="relative rounded-lg pt-6 bg-[#03364B]  transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center">
                {game.icon}
                <span className="text-white text-lg font-medium pt-2">{game.title}</span>
              </div>
            ) : (
              <GameCard
                key={index}
                title={game.title}
                imageSrc={game.imageSrc}
                checkOffers={game.checkOffers}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNews
