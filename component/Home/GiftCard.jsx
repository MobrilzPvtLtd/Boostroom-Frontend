// import React from 'react';
// import { Grid } from 'lucide-react';

// const GiftCard = ({ title, logo, bgColor = '#03364B' }) => (
//   <div className="relative group overflow-hidden rounded-lg cursor-pointer">
//     {/* Card Background */}
//     <div 
//       className="w-full h-64 flex items-center justify-center"
//       style={{ backgroundColor: bgColor }}
//     >
//       <img 
//         src={logo} 
//         alt={title} 
//         className="w-32 h-32 pt-6 object-contain"
//       />
//     </div>
    
//     {/* Title */}
//     <div className="absolute top-0 left-0 right-0 p-4 flex bg-black/20 justify-center">
//       <h3 className="text-white text-lg font-semibold">{title}</h3>
//     </div>
    
//     {/* Hover Effect */}
//     <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//   </div>
// );

// const GiftCardSection = () => {
//   const cards = [
//     { 
//       title: 'PlayStation Gift Card', 
//       logo: '/image/playstation.jpg',
//       bgColor: '#022F50'
//     },
//     { 
//       title: 'XBOX Gift Card', 
//       logo: '/image/xbox.jpg',
//       bgColor: '#1E3934'
//     },
//     { 
//       title: 'Apple Gift Card', 
//       logo: '/image/applegift.jpg',
//       bgColor: '#25343B'
//     },
//     { 
//       title: 'Steam Gift Card', 
//       logo: '/image/Steam.jpg',
//       bgColor: '#013656'
//     },
//     { 
//       title: 'All Gift Cards', 
//       icon: <Grid className="w-16 h-16 text-cyan-400 mb-2" />,
//       isViewAll: true 
//     }
//   ];

//   return (
//     <div className="bg-[#131746] py-20 px-12 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12 flex flex-col justify-center items-center">
//           <h2 className="text-3xl font-bold w-fit text-slate-300 px-40 mb-6 pb-3 border-b border-[#8F7326]">
//             Gift Cards
//           </h2>
//           <div className="max-w-5xl mx-auto py-2">
//             <p className="text-gray-400 mb-2">
//               Explore our comprehensive selection of gift cards in the ultimate marketplace for gamers.
//             </p>
//             <p className="text-gray-400">
//               Our marketplace offers a wide variety of gift cards for your favorite online video games, ensuring you get exactly what you need.
//             </p>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {cards.map((card, index) => (
//             card.isViewAll ? (
//               <div 
//                 key={index} 
//                 className="relative rounded-lg pt-6 bg-[#03364B] hover:bg-slate-800 transition-colors duration-300 cursor-pointer h-64 flex flex-col items-center justify-center"
//               >
//                 {card.icon} 
//                 <div className="absolute top-0 left-0 right-0 p-4 flex bg-black/20 justify-center">
//                   <h3 className="text-white text-lg font-semibold">{card.title}</h3>
//                 </div>
//               </div>
//             ) : (
//               <GiftCard
//                 key={index}
//                 title={card.title}
//                 logo={card.logo}
//                 bgColor={card.bgColor}
//               />
//             )
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftCardSection;

import React from 'react';
import { Grid } from 'lucide-react';

const GameCard = ({ title, imageSrc }) => (
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
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-cyan-500/10 opacity-0  transition-opacity duration-300" />
  </div>
);

const GiftCardSection = () => {
  const games = [
    { title: 'Mobile Legends', imageSrc: '/image/legennds.jpg' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { title: '', imageSrc: '' },
    { 
      title: 'All Gift Cards', 
      icon: <Grid className="w-8 h-8 text-yellow-400 mb-2" />,
      isViewAll: true 
    }
  ];

  return (
    <div className="bg-dark-300 pb-20 pt-10 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold w-fit text-slate-300 px-40 mb-6 pb-3 border-b border-orange-300">
          Trending Gift Cards
          </h2>
          <div className="max-w-5xl mx-auto py-2 ">
            <p className="text-gray-400 mb-2">
              Discover the best in Top-Up services on our dedicated marketplace for gamers.
            </p>
            <p className="text-gray-400">
              Improve your gaming experience by seamlessly adding funds or in-game directly through our platform.
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {games.map((game, index) => (
            game.isViewAll ? (
              <div key={index} className="relative rounded-lg pt-6 bg-dark-500  transition-colors duration-300 cursor-pointer h-28 flex flex-col items-center justify-center">
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

export default GiftCardSection;