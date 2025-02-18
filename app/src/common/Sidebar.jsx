import React from 'react';
import { MdPlayArrow } from "react-icons/md";
import { ChevronRight, Gamepad, CreditCard, Gift, TrendingUp, Package, Coins, Users, User, Palette, FileText } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
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
    <div className="w-full bg-[#021D26] min-h-screen px-4 pb-10 text-white">
      {/* Logo */}
      <div className='flex justify-center items-center '>
        <div className="w-52 h-52 px-4 py-3 relative overflow-hidden rounded-md">
          <Image
            src="/image/img1.jpg"
            alt="game"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Game Selection Button */}
      <button className="w-[100%] bg-[#03364B] px-4 py-3 mb-6 flex items-center gap-2  hover:bg-slate-700 text-sm font-semibold transition-colors">
        <span>Select Game / Service</span>
        <MdPlayArrow  className="w-5 h-5 text-cyan-400 " />
      </button>

      {/* Services Section */}
      <div className="mb-8">
        <h2 className=" text-slate-100 font-semibold text-sm mb-4">OUR CORE SERVICES</h2>
        <nav>
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-3 p-2 hover:bg-[#083548] transition-colors mb-1"
            >
              <span className="text-cyan-400  ">
              <Image
                  src={service.imgSrc}
                  alt={service.title}
                  width={30}
                  height={30}
                  className="text-cyan-400"
                />
              </span>
              <span className='text-slate-300 text-sm font-semibold '>{service.title}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Work With Us Section */}
      <div className='flex flex-col   justify-center bg-[#03364B] items-center '>
        <div className=" h-52  relative overflow-hidden ">
          <Image
            src="/image/img2.jpg"
            alt="game"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className=" text-center  pt-3 pb-6  ">
          <p className="text-[10px] mb-4 px-3 text-slate-300">
            We are looking for highly professional and dedicated gamers / suppliers.
          </p>
          <button className="bg-[#017F7B] border border-[#00D09E] text-white font-semibold text-sm px-6 py-2 hover:bg-cyan-600 transition-colors">
            WORK WITH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;