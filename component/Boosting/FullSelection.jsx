
import React from 'react';

const FullSelection = ({ service}) => {
  const games = {
    'A': [
      { title: "World of Warcraft", imageSrc: "/image/worldOfWarcraft.png" },
      { title: "Valorant", imageSrc: "/image/valorent.png" },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
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
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
      { title: '', imageSrc: ' ', checkOffers: false },
    ],
 
  };

  const GameCard = ({ title, imageSrc, checkOffers }) => (
    <div className="relative group overflow-hidden rounded cursor-pointer">
      <div 
        className="w-full h-28 bg-cover bg-center"
        style={{ 
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
          backgroundColor: '#0E1237'
        }}
      />
    
      <div className="absolute bottom-6 left-0 right-0 p-4 flex justify-center">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      
      {/* {checkOffers && (
        // <div className="absolute bottom-0 right-0 p-2 flex justify-center">
        //   <h3 className="text-white text-[9px] bg-[#017F7A] py-1 px-2 font-semibold">
        //     CHECK OFFERS
        //   </h3>
        // </div>
      )} */}
      
      <div className="absolute inset-0 bg-cyan-500/10 opacity-0  transition-opacity duration-300" />
    </div>
  );

  // Only render sections that have games
  const availableLetters = Object.keys(games).sort();

  return (
    <div className="bg-dark-300 min-h-screen p-12">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
         <h2 className="text-3xl font-bold w-fit text-white px-40 mb-6 pb-3 border-b border-orange-300">
           All { service?.name }
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
      <div className="max-w-7xl mx-auto space-y-8 ">
        {availableLetters.map((letter) => (
          <section key={letter} className="space-y-4">
            <h2 className="rounded-md text-base font-semibold border border-yellow-400 w-fit px-4 text-yellow-400">{letter}</h2>
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