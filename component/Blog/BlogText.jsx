import Image from 'next/image'
import React from 'react'

function BlogText() {
  return (
    <>

      <div className="relative bg-teal-950 mt-16 py-16">
        {/* Wave Background */}
        <Image
          src="/image/levelingbg.jpg"
          alt="game"
          className="absolute top-0 left-0 h-full w-full object-cover"
          width={100}
          height={100}
        />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 px-12 ">
            {/* Left Content */}
            <div className="flex-1 ">
              {/* Title with Level Up Icon */}
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-white">BoostRoom Blog Page</h2>
                
              </div>

              {/* Description */}
              <p className="text-slate-400 text-base leading-relaxed max-w-full">
                Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Sup-port. Connect with us anytime, anywhere! Always Here for You! Experience hassle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere! Always Here for You! Experience has-sle-free gaming with our 24/7 Customer Support. Connect with us anytime, anywhere!
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogText


// <div className="bg-[#042534] pb-12  pt-6 rounded-lg shadow-lg mt-16 px-24">
// <div className="flex items-start gap-4">
//   {/* Text Content */}
//   <div className="flex-1">
//     <div className="flex items-center gap-2 mb-4">
//       <h2 className="text-white text-2xl font-bold">BoostRoom Blog Page</h2>
      
//     </div>
//     <p className="text-gray-400 text-sm leading-relaxed">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      
//       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//       Nesciunt, voluptatibus. Corporis saepe facere, dolore ratione
//       consectetur rem qui aspernatur, tempore esse nam molestias, fuga
//       officiis quisquam a recusandae incidunt delectus?
//     </p>
//   </div>


// </div>



// </div>