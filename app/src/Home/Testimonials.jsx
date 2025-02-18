// import React from 'react';
// import { Star } from 'lucide-react';

// const StarRating = ({ rating }) => (
//   <div className="flex space-x-1">
//     {[...Array(5)].map((_, index) => (
//       <Star
//         key={index}
//         className={`w-5 h-5 ${index < rating ? 'fill-emerald-400 text-emerald-400' : 'text-gray-400'}`}
//       />
//     ))}
//   </div>
// );

// const TestimonialCard = ({ name, title, rating, review }) => (
//   <div className="bg-slate-800/50 p-8 rounded-lg">
//     <div className="space-y-4">
//       <div className="text-gray-400 uppercase text-sm">{name}</div>
//       <h3 className="text-white text-xl font-bold">{title}</h3>
//       <StarRating rating={rating} />
//       <p className="text-gray-300 leading-relaxed">
//         {review}
//       </p>
//     </div>
//   </div>
// );

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: 'AMBER',
//       title: 'Continued Excellence',
//       rating: 5,
//       review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
//     },
//     {
//         name: 'AMBER',
//         title: 'Continued Excellence',
//         rating: 3,
//         review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
//       },
//       {
//         name: 'AMBER',
//         title: 'Continued Excellence',
//         rating: 5,
//         review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
//       },
//       {
//         name: 'AMBER',
//         title: 'Continued Excellence',
//         rating: 5,
//         review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
//       },
//     // Add more testimonials here
//   ];

//   return (
//     <div className="bg-slate-900 py-16 px-4 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50" />
      
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header Section */}
        // <div className="flex justify-between items-start mb-12">
        //   <div>
        //     <h2 className="text-4xl font-bold text-white mb-2">
        //       Our clients testimonials
        //     </h2>
        //     <p className="text-amber-500">
        //       See what our buyers have to say.
        //     </p>
        //   </div>
          
        //   {/* Trustpilot Rating */}
        //   <div className="flex items-center space-x-2">
        //     <span className="text-emerald-400 font-bold">Trustpilot</span>
        //     <StarRating rating={5} />
        //   </div>
        // </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard
//               key={index}
//               {...testimonial}
//             />
//           ))}
//         </div>

//         {/* Call to Action Button */}
//         <div className="text-center">
//           <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors uppercase font-medium">
//             Read Customer Reviews
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { IoStar } from 'react-icons/io5';

const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, index) => (
      <IoStar
        key={index}
        className={`w-5 h-5 ${index < rating ? 'fill-emerald-400 text-emerald-400' : 'text-gray-400'}`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ name, title, rating, review }) => (
  <div className="bg-slate-800/50 p-8 rounded-lg w-96 shrink-0 "> {/* Added w-80 and shrink-0 */}
    <div className="space-y-4">
      <div className="text-gray-400 uppercase text-sm">{name}</div>
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <StarRating rating={rating} />
      <p className="text-gray-300 leading-relaxed">
        {review}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'AMBER',
      title: 'Continued Excellence',
      rating: 5,
      review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
    },
    {
        name: 'AMBER',
        title: 'Continued Excellence',
        rating: 3,
        review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
      },
      {
        name: 'AMBER',
        title: 'Continued Excellence',
        rating: 4,
        review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
      },
      {
        name: 'AMBER',
        title: 'Continued Excellence',
        rating: 2,
        review: 'New expansion, and new things I missed once again on my account. Since WoD, I have trusted this team with my toons and I have never had one a bad experience. There was great communication with every inquiry I had.'
      },
    // Add more testimonials here
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) { // Small screens
        setCardsToShow(1);
      } else if (width < 1024) { // Medium screens
        setCardsToShow(2);
      } else { // Large screens
        setCardsToShow(3);
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize); // Call on resize

    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * (containerRef.current.offsetWidth / cardsToShow), // Adjusted scroll calculation
        behavior: 'smooth',
      });
    }
  }, [currentIndex, cardsToShow]); // Added cardsToShow to dependency array

  const cardWidth = `w-${100 / cardsToShow}%`; // Calculate dynamic width

  return (
    <div className="bg-[#042534] py-16 px-4 relative overflow-hidden">
        {/* ... (background and header) */}
        <Image
            src="/image/testimonial.jpg"
            alt="game"
            className="absolute top-0 left-0 h-full w-full object-cover"
            width={100}
            height={100}
        />
        <div className=' relative z-1 '>
            <div className="flex justify-between items-start mb-10 px-12">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-2">
                    Our clients testimonials
                    </h2>
                    <p className="text-amber-500">
                    See what our buyers have to say.
                    </p>
                </div>
            
                {/* Trustpilot Rating */}
                <div className="flex items-center space-x-4">
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
            <div className="overflow-x-auto scroll-smooth custom-scrollbar" ref={containerRef}>
                <div className="flex space-x-6 py-6 px-4 lg:w-fit">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`${cardWidth} shrink-0`}> {/* Added dynamic width */}
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </div> 
            </div>
            <div className="text-center flex justify-center w-full">
                <button className="  bg-[#017F7B] border border-[#00D09E] text-white px-8 py-3 hover:bg-emerald-700 transition-colors uppercase font-medium">
                Read Customer Reviews
                </button>
            </div>
        </div>
        {/* ... (call to action) */}
    </div>
);
};

export default TestimonialsSection;
