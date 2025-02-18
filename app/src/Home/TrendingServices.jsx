import React from 'react';
import { Trophy, Grid, Coins, User } from 'lucide-react';

const ServiceCard = ({ title, icon, gameList = [] }) => (
  <div className="bg-[#003A44] rounded-lg overflow-hidden">
    {/* Header */}
    <div className="bg-[#004B57] p-4 flex justify-center items-center gap-3">
      {icon}
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
    
    {/* Game List */}
    <div className="p-4 h-[50vh]  overflow-auto custom-scrollbar">
      {gameList.map((game, index) => (
        <div 
          key={index}
          className="flex justify-between items-center py-3 border-b border-teal-900/30 last:border-0"
        >
          <span className="text-white text-sm ">{game}</span>
          <button className="bg-[#00606E] text-white font-extrabold text-[10px] px-2 py-1 rounded hover:bg-[#007384] transition-colors">
            CHECK OFFERS
          </button>
        </div>
      ))}
      
    </div>
    {/* View All Link */}
    {gameList.length > 0 && (
    <div className=" py-2 border-t border-teal-900/50  z-30">
        <button className="text-white hover:text-teal-300 transition-colors w-full text-center">
        View All
        </button>
    </div>
    )}
  </div>
);

const TrendingServices = () => {
  const services = [
    {
      title: "Leveling",
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      gameList: [
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft",
        "World of Warcraft"
      ]
    },
    {
      title: "Items",
      icon: <Grid className="w-6 h-6 text-purple-400" />,
      gameList: []
    },
    {
      title: "Game Coins",
      icon: <Coins className="w-6 h-6 text-amber-400" />,
      gameList: []
    },
    {
      title: "Coaching",
      icon: <User className="w-6 h-6 text-cyan-400" />,
      gameList: []
    }
  ];

  return (
    <div className="bg-[#042534] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-[#026062] inline-block px-12">
            Trending Game Services
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-400 mb-2">
              Check the forefront of trending game services section, showcasing the latest in demand services that gamers are seeking.
            </p>
            <p className="text-gray-400">
              Stay ahead of the curve and explore the most popular and emerging services that set the trends in the gaming world.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              gameList={service.gameList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingServices;