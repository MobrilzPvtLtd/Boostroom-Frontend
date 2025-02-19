import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import PopularServices from "../Home/PopularServices";
import TrendingServices from "../Home/TrendingServices";
import HotGamesSection from "../Home/HotGames";
import Image from "next/image";

function Leveling({ services }) {
  return (
    <>
      <div className="bg-[#042534] pb-12 px-12 pt-6 rounded-lg shadow-lg mt-16">
        <div className="flex items-start gap-4">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-white text-xl font-bold">Leveling</h2>
              <span className="text-yellow-400">💪</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, voluptatibus. Corporis saepe facere, dolore ratione
              consectetur rem qui aspernatur, tempore esse nam molestias, fuga
              officiis quisquam a recusandae incidunt delectus?
            </p>
          </div>

          {/* Image */}
           <div className="relative  my-4">
                   <Image
                     src="/image/level_pic.jpg"
                     alt="Right gaming setup"
                     width={200}
                     height={200}
                     layout="responsive"
                     className="object-cover "
                     priority
                   />
                 </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-800 text-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leveling;
