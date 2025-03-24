import React from 'react';
import { Grid } from 'lucide-react';

const GameCard = ({ title, imageSrc }) => (
  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
    {/* Background Image */}
    <div 
      className="w-full h-36 bg-cover bg-center"
      style={{ 
        backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
        backgroundColor: '#0E1237'
      }}
    />
    
   
    
    {/* Title */}
    <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center ">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0  transition-opacity duration-300" />
  </div>
);

const RelatedBrand = () => {
  const games = [
    { title: 'World of Warcraft', imageSrc: '/image/worldOfWarcraft.jpg' },
    { title: 'Valorant', imageSrc: '/image/valorent.jpg' },
    
   
  ];

  return (
    <div className="bg-[#131746] pb-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-gray-100 mb-3'>Related Brands</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {games.map((game, index) => (
           
          
            
              <GameCard
                key={index}
                title={game.title}
                imageSrc={game.imageSrc}
              />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBrand;