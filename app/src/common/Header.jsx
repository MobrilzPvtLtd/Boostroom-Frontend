'use client'

import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';
import { MdNotifications } from 'react-icons/md';
import { FaMessage } from "react-icons/fa6";
import Image from 'next/image';  
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/utils/AuthContext';

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <header className="w-[84%] bg-[#093041] border-b shadow-xl fixed z-[50] px-10 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-8 justify-between">
          {/* Left section - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="w-12 h-12 relative overflow-hidden ">
              <Image
                src="/image/10year.jpg"
                alt="game"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm text-slate-400 font-semibold hover:text-white transition-colors">
                HOW WE OPERATE
              </a>
              <a href="#" className="text-sm text-slate-400 font-semibold hover:text-white transition-colors">
                OUR PRINCIPLES
              </a>
            </nav>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your service"
                className="w-full text-sm bg-[#03364B] text-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center space-x-6">
            {/* Notification Icons */}
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <MdNotifications className="h-6 w-6 text-slate-300 " />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <FaMessage className="h-5 w-5 text-slate-300 " />
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
              {user ? (
                <>
                  <span className="text-white font-semibold flex justify-center items-center ">{user.first_name} {user.last_name}</span>
                  <button
                    className="px-6 py-2 text-xs text-white font-semibold bg-slate-800 hover:bg-slate-700 transition-colors"
                    onClick={logout}
                  >
                    LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-6 py-2 text-xs text-white font-semibold bg-slate-800 hover:bg-slate-700 transition-colors"
                    onClick={() => { router.push('/signup') }}
                  >
                    REGISTER
                  </button>
                  <button
                    className="px-8 py-2 text-xs font-semibold text-white bg-[#017F7B] border border-[#00D09E] hover:bg-emerald-600 transition-colors"
                    onClick={() => { router.push('/login') }}
                  >
                    LOGIN
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;