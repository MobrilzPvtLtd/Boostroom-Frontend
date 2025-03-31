import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PromotionCard = () => {
  const [filters, setFilters] = useState({
    region: "Region", // Default value for Region
    server: "Categories", // Default value for Categories
    budget: "Budget", // Default value for Budget
  });

  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));

    if (!activeFilters.some((filter) => filter.value === value)) {
      setActiveFilters((prev) => [...prev, { label: key, value }]);
    }
  };

  const removeFilter = (value) => {
    setActiveFilters(activeFilters.filter((filter) => filter.value !== value));
  };

  return (
    <div className="bg-dark-300 p-4">
      {/* Search Bar and Filters */}
      <div className="w-full max-w-5xl">
        <div className="flex flex-wrap justify-between items-center space-x-4 mb-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Find desired offer"
                className="w-full text-xs bg-[#171D57] text-slate-600 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-yellow-400 rounded"
              />
              <Search className="absolute left-3 top-2 h-5 w-5 text-white" />
            </div>
          </div>

          {/* Region Select */}
          <select
            className="w-56 p-2 rounded bg-dark-500 text-white focus:outline-none"
            value={filters.region}
            onChange={(e) => handleFilterChange("region", e.target.value)}
          >
            <option>Region</option>
            <option>EU</option>
            <option>NA</option>
            <option>Asia</option>
          </select>

          {/* Categories Select */}
          <select
            className="w-48 p-2 rounded bg-dark-500 text-white focus:outline-none"
            value={filters.server}
            onChange={(e) => handleFilterChange("server", e.target.value)}
          >
            <option>Categories</option>
            <option>Kazzak EU - Horde</option>
            <option>Ravencrest EU - Alliance</option>
            <option>Stormrage NA</option>
          </select>

          {/* Budget Select */}
          <select
            className="w-48 p-2 rounded bg-dark-500 text-white focus:outline-none"
            value={filters.budget}
            onChange={(e) => handleFilterChange("budget", e.target.value)}
          >
            <option>Budget</option>
            <option>Budget</option>
            <option>Mid-tier</option>
            <option>Premium</option>
          </select>
        </div>

        {/* Filter Tags */}
        <div className="text-base py-1 text-slate-400 w-full max-w-4xl flex flex-wrap gap-3 mb-4">
          Popular Searches:
          {activeFilters.map((filter) => (
            <span
              key={filter.value}
              className="px-2 bg-fuchsia-500 text-white rounded-sm flex items-center space-x-2"
            >
              <span className="text-sm">
                {filter.label}: {filter.value}
              </span>
              <button
                onClick={() => removeFilter(filter.value)}
                className="text-white"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Seller Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1].map((_, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 rounded-lg overflow-hidden border border-blue-500"
          >
            <div
              className="relative w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/image/card.png')" }}
            >
              <div className="absolute top-2 right-4 flex items-center space-x-2">
                <img
                  src="/image/redannounce.png"
                  alt="Seller Avatar"
                  className="rounded-sm border-1 border-blue-500"
                />
                <span className="text-white text-xs font-semibold">
                  Promoted Seller
                </span>
              </div>
              <div className="p-6 flex items-center space-x-6">
                <div className="relative bg-[#1f2982] p-1 rounded ">
                  <img
                    src="/image/dragonicon.png"
                    alt="Seller Avatar"
                    className="rounded-sm border-1 border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold text-white">boostroom</h2>
                    <img
                      src="/image/verified.png"
                      alt="Seller Avatar"
                      className="rounded-sm border-1 border-blue-500"
                    />
                  </div>

                  <p className="text-fuchsia-500 text-[10px] py-1 font-semibold">
                    LEVEL 157 • LEGENDARY SELLER
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button className="px-2 py-1 bg-yellow-500 text-black  rounded flex items-center space-x-2">
                      <img
                        src="/image/blackmessage.png"
                        alt="Seller Avatar"
                        className="rounded-sm border-1 border-blue-500"
                      />
                      <span className="text-[10px] font-bold">
                        CONTACT SELLER
                      </span>
                    </button>
                    <button className="px-2 py-1 bg-yellow-500 text-black  rounded flex items-center space-x-2">
                      <img
                        src="/image/blackbag.png"
                        alt="Seller Avatar"
                        className="rounded-sm border-1 border-blue-500"
                      />
                      <span className="text-[10px] font-bold">
                        VISIT STORE FOR OFFERS
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionCard;
