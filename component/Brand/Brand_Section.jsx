
"use client"

import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import Image from 'next/image';

const BrandManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  
  const brands = [
    { id: 1, name: 'Brand Test 1', status: true },
    { id: 2, name: 'Brand Test 2', status: false },
    { id: 3, name: 'Brand Test 3', status: true },
    { id: 4, name: 'Brand Test 4', status: true },
  
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="h-full bg-slate-900 p-6">
     
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-2xl text-white font-bold flex items-center gap-2">
          <span className="text-emerald-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
          Brands
        </h1>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search desired brand"
            className="w-full bg-slate-800/50 text-white pl-10 pr-4 py-2 rounded-md border border-slate-700 focus:outline-none focus:border-emerald-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
          <Plus size={20} />
          ADD 
        </button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative overflow-hidden rounded-md">
                <Image
                  src="/image/game1.jpg"
                  alt="game"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">{brand.name}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <button className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-md text-sm hover:bg-emerald-500/30 transition-colors">
                    EDIT 
                  </button>
                  <button className="bg-red-500/20 text-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-500/30 transition-colors">
                    DELETE 
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-300">Brand Status</span>
                <button 
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    brand.status ? 'bg-emerald-500' : 'bg-slate-600'
                  }`}
                >
                  <span 
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                      brand.status ? 'left-6' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-800 text-white hover:bg-slate-700">
            ‹
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === page
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-800 text-white hover:bg-slate-700">
            ›
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="w-20 bg-slate-800 text-white px-2 py-1 rounded-md border border-slate-700"
            placeholder="Page"
          />
          <button className="bg-emerald-500 text-white px-3 py-1 rounded-md hover:bg-emerald-600">
            GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandManagement;