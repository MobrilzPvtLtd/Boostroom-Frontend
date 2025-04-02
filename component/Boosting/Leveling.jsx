import { BoxIcon, GrabIcon, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LevelingSection = ({ service }) => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-dark-300 w-full mt-20">
      <div className="px-6 py-6 flex  md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center text-gray-300 text-sm">
            <Link href="/" className="hover:text-white">
              <span>
                <Home className=" " />
              </span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-md">{service?.name}</span>
          </div>

          {/* Logo and Title */}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4  justify-between max-w-7xl mx-auto">
        <div className="flex gap-5 items-center bg-dark-500 p-4">
          <span className="text-cyan-400">
            <Image
              src={service?.service_icon}
              alt={service?.name}
              width={34}
              height={34}
              className="text-cyan-400"
            />
          </span>
          <h1 className="text-white text-2xl font-bold">{service?.name}</h1>
        </div>
        <div className=" bg-dark-500 p-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search bossting brand"
              className="w-full text-xs bg-[#171D57] text-slate-600 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-yellow-400  rounded "
            />
            <Search className="absolute left-3 top-2 h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelingSection;
