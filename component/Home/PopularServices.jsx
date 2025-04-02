import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TitleBar from '../common/TitleBar';
 
const ServiceCard = ({ imgSrc, title }) => (
  <div className="bg-[#0E1237] px-6 py-6 rounded  transition-all duration-300 cursor-pointer group">
    <div className="flex flex-col items-center space-y-2">
      <div className="transform h-20 w-20 p-4 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={imgSrc}
          alt={title}
          width={90} // Adjust the width and height as needed
          height={90} 
          className="text-cyan-400"
        />
      </div>
      <h3 className="text-white text-lg font-medium ">{title}</h3>
    </div>
  </div>
);

const PopularServices = ({services}) => {

  return (
    <div className="bg-[#131746] py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          {/* <h2 className="text-2xl font-bold w-fit text-slate-100 px-20 mb-6 pb-3 border-b-2 border-[#8F7326]">
            View Popular Services
          </h2> */}
          <TitleBar title={'View Popular Services'}/>
          <div className="max-w-4xl mx-auto text-sm font-normal tracking-wide py-2">
            <p className="text-gray-400 mb-2">
              Step into our marketplace for gamers and explore the most popular services designed to amplify your gaming experience.
            </p>
            <p className="text-gray-400">
              From coaching and boosting to leveling and obtaining rare items, our platform caters to every aspect of your gaming needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {services?.map((service, index) => (
            <Link
            key={index}
            href={`/${service?.slugs.find(slug => slug.default)?.slug}`} 
          >
            <ServiceCard
              key={index}
              imgSrc={service.service_icon}
              title={service.name}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
