import Image from "next/image";
import { useState } from "react";

const PromotionCard = () => {

    const [filters, setFilters] = useState({
        region: 'EU',
        server: 'Kazzak EU - Horde',
        budget: 'Budget',
      });
      
      const [activeFilters, setActiveFilters] = useState([
        { label: 'Region', value: 'EU' },
        { label: 'Server', value: 'Kazzak EU - Horde' },
      ]);
    
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
        <div className="relative flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Find desired offer"
            className="w-full p-2 pl-10 rounded-lg bg-dark-500 text-white focus:outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <select
          className="p-2 rounded-lg bg-dark-500 text-white focus:outline-none"
          value={filters.region}
          onChange={(e) => handleFilterChange('Region', e.target.value)}
        >
          <option>EU</option>
          <option>NA</option>
          <option>Asia</option>
        </select>
        <select
          className="p-2 rounded-lg bg-dark-500 text-white focus:outline-none text-muted"
          value={filters.server}
          onChange={(e) => handleFilterChange('Server', e.target.value)}
        >
          <option>Kazzak EU - Horde</option>
          <option>Ravencrest EU - Alliance</option>
          <option>Stormrage NA</option>
        </select>
        <select
          className="p-2 rounded-lg bg-dark-500 text-white focus:outline-none"
          value={filters.budget}
          onChange={(e) => handleFilterChange('Budget', e.target.value)}
        >
          <option>Budget</option>
          <option>Mid-tier</option>
          <option>Premium</option>
        </select>
      </div>
      
      {/* Filter Tags */}
      <div className="w-full max-w-4xl flex flex-wrap gap-2 mb-4">
        {activeFilters.map((filter) => (
          <span
            key={filter.value}
            className="px-2 bg-fuchsia-500 text-white rounded-sm flex items-center space-x-2"
          >
            <span className="text-sm">{filter.label}: {filter.value}</span>
            <button onClick={() => removeFilter(filter.value)} className="text-white">✕</button>
          </span>
        ))}
      </div>
    </div>

      {/* Seller Cards - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1].map((_, index) => (
          <div key={index} className="w-full bg-gray-800 rounded-lg overflow-hidden border border-blue-500">
            <div
              className="relative h-48 bg-cover bg-center"
              style={{ backgroundImage: "url('/image/card-bg.png')" }}
            >
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14h-2v6l5.25 3.15.75-1.23-4-2.67z" />
                </svg>
                <span className="text-white font-semibold">Promoted Seller</span>
              </div>
              <div className="p-6 flex items-center space-x-6">
                <div className="relative">
                  <Image
                    src="/image/cardicon.jpg"
                    alt="Seller Avatar"
                    width={100}
                    height={100}
                    className="rounded-sm border-1 border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">boostroom</h2>
                  <p className="text-fuchsia-500 text-sm">LEVEL 157 • LEGENDARY SELLER</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="px-2 py-2 bg-yellow-500 text-black font-semibold rounded-lg flex items-center space-x-2">
                      <span className="text-sm">CONTACT SELLER</span>
                    </button>
                    <button className="px-2 py-2 bg-yellow-500 text-black font-semibold rounded-lg flex items-center space-x-2">
                      <span className="text-sm">VISIT STORE FOR OFFERS</span>
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
