"use client";

import { ArrowRight } from "lucide-react";

const denominations = [
  { label: "950 Gems" },
  { label: "360 Gems" },
  { label: "170 Gems" },
  { label: "80 Gems" },
  { label: "30 Gems" },
  { label: "Brawl Pass" },
];

export default function Denominations() {
  return (
    <div className="bg-dark-300 text-white p-6 ">
      <h2 className="text-lg font-semibold mb-4 bg-dark-500 w-1/2 p-2 rounded-sm">Other Denominations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[65%] ">
        {denominations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-dark-500 p-4 rounded-lg cursor-pointer transition hover:bg-[#1B1F4F]"
          >
            <span className="font-semibold">{item.label}</span>
            <ArrowRight className="text-yellow-400" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center w-full">
        <button className="bg-yellow-400 text-black text-sm p-2 font-semibold rounded-md hover:bg-yellow-500 transition">
          SHOW MORE
        </button>
      </div>
    </div>
  );
}
