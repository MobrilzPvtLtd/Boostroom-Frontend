"use client";

import React from "react";
import { Search, Bell, MessageSquare } from "lucide-react";
import { MdNotifications, MdPlayArrow } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <header
      className="w-[85%] bg-dark-500 border-b shadow-xl fixed z-[50] px-3
     border-slate-800"
    >
      <div className="max-w-7xl mx-auto py-7 px-2">
        <div className="flex items-center gap-8 justify-between">
          <div className="flex items-center justify-center w-[52%] space-x-4">
            <button className=" bg-yellow-400 px-2 py-2 flex items-center gap-2  text-black text-xs font-bold transition-colors rounded-sm">
              <span>SELECT GAME / SERVICE</span>
              <span className="px-1">▼</span>
              {/* <MdPlayArrow className="w-5 h-5 text-black" /> */}
            </button>
            <div className="flex-1 mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search your service"
                  className="w-full text-xs bg-[#171D57] text-slate-600 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-yellow-400  rounded "
                />
                <Search className="absolute left-3 top-2 h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4 pr-4">
              {user ? (
                <>
                  <span className="text-white font-semibold flex justify-center items-center  ">
                    {user?.first_name} {user?.last_name}
                  </span>
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
                    className="px-8 py-2 border-2 border-yellow-400 text-yellow-400 text-xs  font-bold hover:bg-yellow-400 hover:text-navy-900 transition-colors rounded"
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    SELL
                  </button>
                  <button
                    className="px-8 py-2 border-2 border-yellow-400 text-yellow-400  text-xs font-bold hover:bg-yellow-400 hover:text-navy-900 transition-colors rounded"
                    onClick={() => {
                      router.push("/login");
                    }}
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
