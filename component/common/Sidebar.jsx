"use client";
import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/axios";

const Sidebar = ({ services }) => {
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
    <div className="w-full bg-dark-500 min-h-screen  pb-10 text-white">
      {/* Logo */}
      <div className="flex justify-center items-center px-4">
        <div
          className="px-6  py-7 relative overflow-hidden rounded-md cursor-pointer "
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src="/image/img1.png"
            alt="game"
            className="object-cover"
            width={90}
            height={90}
          />
        </div>
      </div>

      <div className=" mt-2 px-4">
        <nav>
          {services?.map((service, index) => (
            <Link
              key={index}
              href={`/${service?.slugs.find((slug) => slug.default)?.slug}`}
              className="flex items-center gap-3 p-2 hover:bg-yellow-400 transition-colors "
            >
              <span className="text-cyan-400">
                <Image
                  src={service.service_icon}
                  alt={service.name}
                  width={20}
                  height={20}
                  className="text-cyan-400"
                />
              </span>
              <span className="text-white text-xs font-semibold">
                {service.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Work With Us Section */}
      <div className="flex flex-col relative justify-center pt-32 items-center pl-4">
        <div className="  absolute top-0 left-10 ">
          <Image
            src="/image/img2.png"
            alt="game"
            className="w-full h-56 object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center  pb-3 bg-yellow-400 rounded mr-4 pt-20">
          <p className="text-[9px] leading-[13px] text-start mb-4 px-5 text-gray-900 font-extrabold ">
            Masterloot is looking for highly professional and dedicated gamers /
            suppliers.
          </p>
          <button className="bg-gray-900 rounded text-white font-semibold text-xs px-9 py-2  transition-colors">
            WORK WITH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
