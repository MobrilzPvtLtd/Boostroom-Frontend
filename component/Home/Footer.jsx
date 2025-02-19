import Image from 'next/image';
import React from 'react';
import { IoStar } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#042534] text-gray-300 py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Image
            src="/image/img1.jpg"
            alt="game"
            className="w-30 h-30 object-cover"
            width={100}
            height={100}
        />
          
          <div className="mt-6 space-y-2">
            <h3 className="text-teal-400 font-semibold mb-4">Company Info</h3>
            <p className="text-sm">MASTERLOOT, LLC</p>
            <p className="text-sm">Address: 600 N Broad Street (Suite 5 # 829)</p>
            <p className="text-sm">Middletown DE 19709</p>
            <p className="text-sm">United States</p>
            <p className="text-sm">Website is owned and operated by MASTERLOOT, LLC</p>
            <p className="text-sm">Email: admin@boostroom.com</p>
          </div>

          {/* Social Networks */}
          <div className="mt-6">
            <h3 className="text-teal-400 font-semibold mb-4">Social Networks</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-red-600 rounded-md"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
              <div className="w-8 h-8 bg-pink-600 rounded-md"></div>
              <div className="w-8 h-8 bg-black rounded-md"></div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mt-6">
            <h3 className="text-teal-400 font-semibold mb-4">Contact Methods</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-md"></div>
              <div className="w-8 h-8 bg-green-500 rounded-md"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-md"></div>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-6">
            <h3 className="text-teal-400 font-semibold mb-4">Certificates & Reviews</h3>
            <div className="space-y-4">
              <div className="bg-white p-2 rounded-md w-32"></div>
              <div className="bg-white p-2 rounded-md w-32"></div>
              <div className="flex flex-col items-start ">
                <div className='flex justify-center items-center '>
                    <IoStar  className="w-8 h-8 p-0.5  fill-current mx-0.5 text-[#21A96F]" />
                    <text
                        x="50"
                        y="17"
                        className="text-slate-300 text-sm pt-1 font-bold"
                        textAnchor="middle"
                    >
                        Trustpilot
                    </text>
                </div>
                <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                        <IoStar key={i} className="w-5 h-5 p-[2px]  fill-current mx-0.5 bg-[#21A96F] text-slate-300" />
                    ))}
                </div>
            </div>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a href="#" className="text-sm hover:text-teal-400 transition-colors">
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hot Games & Products */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Hot Games & Products</h3>
          <ul className="space-y-2">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a href="#" className="text-sm hover:text-teal-400 transition-colors">
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-teal-400 font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            {[...Array(12)].map((_, i) => (
              <li key={i}>
                <a href="#" className="text-sm hover:text-teal-400 transition-colors">
                  Link {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-12 text-center text-sm border-t flex justify-center items-center  border-white w-full text-gray-400 mx-auto">
        <p className='max-w-3xl py-6'>
          The product names, logos and brands used on this website are for identification purposes only. 
          Registered Names and Trademarks are the copyright and property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;