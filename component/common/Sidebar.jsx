"use client"
import React, { useEffect, useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link'; 
import { useRouter } from 'next/navigation'; 
import { axiosInstance } from '@/utils/axios';

const Sidebar = ({services}) => {
    const router = useRouter();
  // const [ services,  setServices] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axiosInstance.get('/services');
  //     setServices(response.data.services);
  //   } catch (error) {
  //     return { success: false, message: error.response?.data?.message || 'An error occurred. Please try again.' };
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []); 

  return (
    <div className="w-full bg-[#021D26] min-h-screen px-4 pb-10 text-white">
      {/* Logo */}
      <div className='flex justify-center items-center '>
        <div className="w-52 h-52 px-4 py-3 relative overflow-hidden rounded-md cursor-pointer "
         onClick={() => { router.push('/') }}>
          <Image
            src="/image/img1.jpg"
            alt="game"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Game Selection Button */}
      <button className="w-[100%] bg-[#03364B] px-4 py-3 mb-6 flex items-center gap-2 hover:bg-slate-700 text-sm font-semibold transition-colors">
        <span>Select Game / Service</span>
        <MdPlayArrow className="w-5 h-5 text-cyan-400" />
      </button>

      {/* Services Section */}
      <div className="mb-8">
        <h2 className="text-slate-100 font-semibold text-sm mb-4">OUR CORE SERVICES</h2>
        <nav>
          {services?.map((service, index) => (
            <Link
              key={index}
              href={`/${service.slugs.find(slug => slug.default).slug}`}
              className="flex items-center gap-3 p-2 hover:bg-[#083548] transition-colors mb-1"
            >
              <span className="text-cyan-400">
                <Image
                  src={service.service_icon}
                  alt={service.name}
                  width={30}
                  height={30}
                  className="text-cyan-400"
                />
              </span>
              <span className='text-slate-300 text-sm font-semibold'>{service.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Work With Us Section */}
      <div className='flex flex-col justify-center bg-[#03364B] items-center'>
        <div className="h-52 relative overflow-hidden">
          <Image
            src="/image/img2.jpg"
            alt="game"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center pt-3 pb-6">
          <p className="text-[10px] mb-4 px-3 text-slate-300">
            We are looking for highly professional and dedicated gamers / suppliers.
          </p>
          <button className="bg-[#017F7B] border border-[#00D09E] text-white font-semibold text-sm px-6 py-2 hover:bg-cyan-600 transition-colors">
            WORK WITH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;