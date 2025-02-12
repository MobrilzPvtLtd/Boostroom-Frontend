"use client";
import React from "react";
import {
  Package,
  Tags,
  Truck,
  ShoppingCart,
  MessageCircle,
  List,
  PlusCircle,
  Users,
  UserCheck,
  UserX,
  UserPlus,
  Upload,
  FileText,
  HelpCircle,
  ScrollText,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import Image from "next/image";

function Sidebar() {
  return (
    <>
      <div className="flex bg-slate-900">
        <div className="w-full bg-slate-800/50 text-white p-4 flex flex-col">
         
          <div className="flex flex-col items-center gap-3 mb-8 px-2">
            <div className="w-25 rounded-full bg-emerald-500 flex items-center justify-center">
           
              <Image
                src="/image/boostroom.png"
                alt="Description of image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h2 className="text-sm md:text-xl font-semibold text-center">
                Masterloot
              </h2>
              <p className="text-xs  text-emerald-400 text-center">
                Main Administrator Account
              </p>
            </div>
          </div>

          
          <nav className="flex-1 space-y-6">
            
            <div>
              <h3 className="text-orange-400 text-sm font-medium mb-2">
                Categories / Offers
              </h3>
              <ul className="space-y-1">
                <NavItem icon={<Package size={18} />} label="Service Type" />
                <NavItem icon={<Tags size={18} />} label="Brands" />
                <NavItem icon={<Package size={18} />} label="Offers Type" />
                <NavItem icon={<Truck size={18} />} label="Delivery Options" />
              </ul>
            </div>

        
            <div>
              <h3 className="text-orange-400 text-sm font-medium mb-2">
                Sales / Money Management
              </h3>
              <ul className="space-y-1">
                <NavItem icon={<ShoppingCart size={18} />} label="Orders" />
                <NavItem icon={<MessageCircle size={18} />} label="Chats" />
                <NavItem icon={<List size={18} />} label="Refund List" />
                <NavItem
                  icon={<PlusCircle size={18} />}
                  label="Add Custom Order"
                />
                <NavItem icon={<List size={18} />} label="Request Lobby" />
                <NavItem
                  icon={<ShoppingCart size={18} />}
                  label="Withdrawal Request"
                />
                <NavItem icon={<List size={18} />} label="Withdrawal Methods" />
              </ul>
            </div>

            {/* User Control */}
            <div>
              <h3 className="text-orange-400 text-sm font-medium mb-2">
                User Control
              </h3>
              <ul className="space-y-1">
                <NavItem icon={<Users size={18} />} label="All Users" />
                <NavItem icon={<UserCheck size={18} />} label="Buyers" />
                <NavItem icon={<Users size={18} />} label="Sellers" />
                <NavItem icon={<UserX size={18} />} label="Suspended Users" />
                <NavItem
                  icon={<UserPlus size={18} />}
                  label="Seller Applications"
                />
              </ul>
            </div>

            {/* Web Content/SEO */}
            <div>
              <h3 className="text-orange-400 text-sm font-medium mb-2">
                Web Content / SEO
              </h3>
              <ul className="space-y-1">
                <NavItem icon={<Upload size={18} />} label="Sitemap Upload" />
                <NavItem icon={<FileText size={18} />} label="Blog Pages" />
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-orange-400 text-sm font-medium mb-2">
                Others
              </h3>
              <ul className="space-y-1">
                <NavItem icon={<HelpCircle size={18} />} label="Help Center" />
                <NavItem icon={<ScrollText size={18} />} label="Rules" />
                <NavItem
                  icon={<Settings size={18} />}
                  label="Account Settings"
                />
              </ul>
            </div>
          </nav>

          {/* Logout Button */}
          <button className="flex items-center gap-2 text-gray-300 hover:text-white mt-6 px-4 py-2 rounded-md hover:bg-slate-700/50 transition-colors">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </button>
        </div>

    
      </div>
    </>
  );
}

const NavItem = ({ icon, label }) => (
  <li>
    <a
      href="#"
      className="flex items-center gap-2 text-gray-300 hover:text-white px-4 py-2 rounded-md hover:bg-slate-700/50 transition-colors"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  </li>
);
export default Sidebar;
