
import React from 'react';

const FullSelection = () => {
  const games = {
    'A': [
      { title: 'World of Warcraft', imageSrc: '/image/worldOfWarcraft.jpg', checkOffers: true  },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'B': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'C': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'D': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'E': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'F': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'G': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'L': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'M': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'P': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'R': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
    'W': [
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ]
  };

  const GameCard = ({ title, imageSrc, checkOffers }) => (
    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
      <div 
        className="w-full h-28 bg-cover bg-center"
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
          backgroundColor: '#03364B'
        }}
      />
    
      <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      
      {checkOffers && (
        <div className="absolute bottom-0 right-0 p-2 flex justify-center">
          <h3 className="text-white text-[9px] bg-[#017F7A] py-1 px-2 font-semibold">
            CHECK OFFERS
          </h3>
        </div>
      )}
      
      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  // Only render sections that have games
  const availableLetters = Object.keys(games).sort();

  return (
    <div className="bg-[#042534] min-h-screen p-12">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
         <h2 className="text-3xl font-bold w-fit text-slate-300 px-40 mb-6 pb-3 border-b border-[#026062]">
            Full Selection
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
      <div className="max-w-7xl mx-auto space-y-8 ">
        {availableLetters.map((letter) => (
          <section key={letter} className="space-y-4">
            <h2 className="text-gray-400 text-base font-semibold border-b border-[#026062] w-fit px-7">{letter}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {games[letter].map((game, index) => (
                <GameCard 
                  key={index}
                  title={game.title}
                  imageSrc={game.imageSrc}
                  checkOffers={game.checkOffers}
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