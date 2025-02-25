import { BoxIcon, GrabIcon, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LevelingSection = () => {
  return (
    // <div className="relative bg-teal-950 mt-16 py-16">
    //   {/* Wave Background */}
    //   <Image
    //     src="/image/levelingbg.jpg"
    //     alt="game"
    //     className="absolute top-0 left-0 h-full w-full object-cover"
    //     width={100}
    //     height={100}
    //   />

    //   {/* Content Container */}
    //   <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    //     <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-12 ">
    //       {/* Left Content */}
    //       <div className="flex-1 ">
    //         {/* Title with Level Up Icon */}
    //         <div className="flex items-center gap-3 mb-6">
    //           <h2 className="text-4xl font-bold text-white">Leveling</h2>  
    //             <div className="flex justify-center mt-0.5">
    //               <Image
    //                 src="/image/leveling.jpg"
    //                 alt="Right gaming setup"
    //                 width={100}
    //                 height={100}
    //                 layout="responsive"
    //                 className="object-cover "
    //                 priority
    //               /> 
    //           </div>
    //         </div>

    //         {/* Description */}
    //         <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
    //         Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Sup-port. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience has-sle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere!
    //         </p>
    //       </div>

    //       {/* Right Image */}
    //       <div className="relative h-60 w-60  my-4">
    //         <Image
    //           src="/image/level_pic.jpg"
    //           alt="Right gaming setup"
    //           width={200}
    //           height={200}
    //           layout="responsive"
    //           className="object-cover "
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
     <div className="bg-dark-300 w-full mt-28">
      <div className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Breadcrumb and Logo Section */}
        <div className="flex flex-col space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-gray-300 text-sm">
            <Link href="/" className="hover:text-white">
              <span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg> */}
                <Home/>
              </span>
            </Link>
            <span className="mx-2">/</span>
            <span className='text-md'>boosting</span>
          </div>
          
          {/* Logo and Title */}
          <div className="flex items-center bg-dark-500">
            <div className="mr-3">
              {/* <UserGroupIcon className="h-6 w-6 text-white" /> */}
              <BoxIcon />
            </div>
            <h1 className="text-white text-3xl font-bold">Boosting</h1>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="mt-4 md:mt-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" /> */}
            </div>
            <input
              type="text"
              className="bg-indigo-900/50 text-white placeholder-gray-400 w-full md:w-80 py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search boosting brands"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelingSection;