import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#0E1237] text-gray-300 py-20 pl-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {/* Company Info */}
        <div className="space-y-4">
          <img
            src="/image/logo.png"
            alt="game"
            className="w-60 object-cover" 
          />

          <div className="pt-6 text-xs space-y-2">
            <h3 className="text-yellow-400 text-xs font-bold mb-4">Company Info</h3>
            <p className="text-slate-400">MASTERLOOT, LLC</p>
            <p className="text-slate-400">
              Address: 600 N Broad Street (Suite 5 # 829)
            </p>
            <p className="text-slate-400">Middletown DE 19709</p>
            <p className="text-slate-400">United States</p>
            <p className="text-slate-400 whitespace-nowrap ">
              Website is owned and operated by MASTERLOOT, LLC
            </p>
            <p className="text-slate-400">Email: admin@boostroom.com</p>
          </div>

          {/* Social Networks */}
          <div className="pt-6">
            <h3 className="text-yellow-400 text-xs font-bold mb-3">
              Social Networks
            </h3>
            <div className="flex space-x-2">
              <div className="w-7 h-7 rounded-md ">
                <img src={"/image/facebook.png"}  />
              </div>
              <div className="w-7 h-7  rounded-md">
                <img
                  src={"/image/youtube.png"}  
                />
              </div>
              <div className="w-7 h-7  rounded-md">
                <img src={"/image/instagarm.png"}  />
              </div>
              <div className="w-7 h-7  rounded-md">
                <img src={"/image/tiktok.png"} />
              </div>
              <div className="w-7 h-7  rounded-md">
                <img src={"/image/twitter.png"} />
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="pt-6">
            <h3 className="text-yellow-400 text-xs font-bold mb-3">
              Contact Methods
            </h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-md">
                <Image src={"/image/discord.png"} width={100} height={10} />
              </div>

              <div className="w-8 h-8  rounded-md">
                <Image src={"/image/whatsapp.png"} width={100} height={10} />
              </div>
              <div className="w-8 h-8  rounded-md">
                <Image src={"/image/messenger.png"} width={100} height={10} />
              </div>
              <div className="w-8 h-8  rounded-md">
                <Image src={"/image/telegram.png"} width={100} height={10} />
              </div>
              <div className="w-8 h-8  rounded-md">
                <Image src={"/image/viber.png"} width={100} height={10} />
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="pt-4">
            <h3 className="text-yellow-400 text-xs font-bold mb-4">
              Certificates & Reviews
            </h3>
            <div className="space-y-2">
              <div className=" rounded-md ">
                <Image src={"/image/positivessl.png"} width={140} height={10} />
              </div>
              <div className="  rounded-md ">
                <Image src={"/image/googlesafe.png"} width={140} height={10} />
              </div>

            </div>
          </div>
        </div>

        {/* Information Links */}
        <div className="pl-16 pt-8">
          <h3 className="text-yellow-400 text-sm font-semibold mb-4">Information</h3>
          <ul className="space-y-1">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-xs text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hot Games & Products */}
        <div className="pl-6 pt-8">
          <h3 className="text-yellow-400 text-sm font-semibold mb-4">
            Help
          </h3>
          <ul className="space-y-1">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-xs text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="pr-6 pt-8">
          <h3 className="text-yellow-400 text-sm font-semibold mb-4">Legal</h3>
          <ul className="space-y-1">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-xs text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-12 text-center text-sm border-t flex justify-center items-center  border-orange-300 w-full text-gray-400 mx-auto">
        <p className="max-w-2xl  text-slate-400  py-6 font-normal tracking-wide text-xs">
          The product names, logos and brands used on this website are for
          identification purposes only. Registered Names and Trademarks are the
          copyright and property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
