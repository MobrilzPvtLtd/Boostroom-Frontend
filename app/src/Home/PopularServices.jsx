import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ imgSrc, title }) => (
  <div className="bg-[#09384A] px-8 py-6 rounded-lg hover:bg-[#09384aee] transition-all duration-300 cursor-pointer group">
    <div className="flex flex-col items-center space-y-2">
      <div className="transform h-20 w-20 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={imgSrc}
          alt={imgSrc}
          width={100} // Adjust the width and height as needed
          height={100} 
          className="text-cyan-400"
        />
      </div>
      <h3 className="text-white text-lg font-medium ">{title}</h3>
    </div>
  </div>
);

const PopularServices = () => {
  const services = [
    { imgSrc: "/image/wallet.jpg", title: 'Direct Top Up' },
    { imgSrc: "/image/games.jpg", title: 'Video Games' },
    { imgSrc: "/image/giftcard.jpg", title: 'Gift Cards' },
    { imgSrc: "/image/leveling.jpg", title: 'Leveling' },
    { imgSrc: "/image/items.jpg", title: 'Items' },
    { imgSrc: "/image/coins.jpg", title: 'Game Coins' },
    { imgSrc: "/image/coaching.jpg", title: 'Coaching' },
    { imgSrc: "/image/rent.jpg", title: 'Rent A Gamer' },
    { imgSrc: "/image/skin.jpg", title: 'Skins' },
    { imgSrc: "/image/account.jpg", title: 'Accounts' },
  ];

  return (
    <div className="bg-[#042534] py-20 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold w-fit text-slate-300 px-20 mb-6 pb-3 border-b border-[#026062]">
            View Popular Services
          </h2>
          <div className="max-w-4xl mx-auto py-2">
            <p className="text-gray-400 mb-2">
              Step into our marketplace for gamers and explore the most popular services designed to amplify your gaming experience.
            </p>
            <p className="text-gray-400">
              From coaching and boosting to leveling and obtaining rare items, our platform caters to every aspect of your gaming needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
