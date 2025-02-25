// import Image from "next/image";
// import React from "react";

// function TextArea() {
//   return (
//     <>
//       <div className="bg-[#042534] pb-24 px-12">
//         <div className="max-w-6xl mx-auto ">
//           <h2 className=" font-semibold text-gray-400">H2 Title</h2>
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
         
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
//           </p>
//           <br />
//           <br />

//           <h3 className=" font-semibold text-gray-400"> H3 Title</h3>
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//             quaerat id nesciunt ad similique, non itaque ea. In illum labore
//             modi veritatis dolorum reiciendis voluptatum impedit repellat
//             fugiat, mollitia nulla. Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Soluta quaerat id nesciunt ad similique, non
//             itaque ea. In illum labore modi veritatis dolorum reiciendis
//             voluptatum impedit repellat fugiat, mollitia nulla.
//           </p>

//           <br />
//           <br />

//           <h5 className=" font-semibold text-gray-400"> H5 Title</h5>
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore? <br />
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
//             tempore odio quo adipisci dolor perferendis molestias vel hic porro,
//             nostrum ipsum magnam nemo dicta eveniet saepe laudantium repellat
//             rem veniam.
//           </p>
//         </div>
//         <div className="relative w-full my-4">
//           <Image
//             src="/image/bg244.jpg"
//             alt="Right gaming setup"
//             width={800}
//             height={200}
//             layout="responsive"
//             className="object-cover "
//             priority
//           />
//         </div>

//         <div className="max-w-6xl mx-auto ">
//           <h4 className=" font-semibold text-gray-400">H4 Title</h4>
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
//           </p>
          
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
//           </p>
//           <br />
//           <br />

//           <h2 className=" font-semibold text-gray-400"> H2 Title</h2>
//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sit
//             perspiciatis dolorum et commodi est reprehenderit sint repudiandae
//             veritatis, corporis rem! Mollitia veniam at labore error culpa,
//             dolorum quidem inventore?
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//             quaerat id nesciunt ad similique, non itaque ea. In illum labore
//             modi veritatis dolorum reiciendis voluptatum impedit repellat
//             fugiat, mollitia nulla. Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Soluta quaerat id nesciunt ad similique, non
//             itaque ea. In illum labore modi veritatis dolorum reiciendis
//             voluptatum impedit repellat fugiat, mollitia nulla.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TextArea;

import Image from 'next/image';
import React from 'react';

const BoostingServiceLayout = () => {
  const sections = [
    { level: 'h2', title: 'H2 title' },
    { level: 'h3', title: 'H3 title' },
    { level: 'h4', title: 'H4 title' },
    { level: 'h4', title: 'H4 title' },
    { level: 'h2', title: 'H2 title' }
  ];

  const alphaLinks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', '#'];

  return (
    <div className="min-h-screen bg-dark-300 text-gray-100 px-12 py-2">
      {/* Developer Info Section */}
      {/* <div className="mb-8 text-sm text-yellow-400">
        <p className="">Info for developers:</p>
        <p>
          Sections for games goes for all letters from A up to Z with a # at the end - {' '}
          {alphaLinks.map((letter, index) => (
            <span key={letter} className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
              {letter}
              {index < alphaLinks.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
        <p className="">I will not design rest of letters so i dont lose time on it.</p>
      </div> */}

      {/* Main Content Sections */}
      <div className='bg-dark-500 p-4'>  
      {sections.map((section, index) => (
        <div key={index} className="mb-12 ">
          {section.level === 'h2' && (
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          )}
          {section.level === 'h3' && (
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
          )}
          {section.level === 'h4' && (
            <h4 className="text-lg font-bold mb-4">{section.title}</h4>
          )}
          
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Banner Image - Only show after third section */}
          {/* {index === 2 && (
            <div className="relative w-full h-full my-8 overflow-hidden rounded-lg">
              <Image
            src="/image/bg244.jpg"
            alt="Right gaming setup"
            width={800}
            height={200}
            layout="responsive"
            className="object-cover "
            priority
          />
            </div>
          )} */}
        </div>
      ))}
      </div>
    </div>
  );
};

export default BoostingServiceLayout;