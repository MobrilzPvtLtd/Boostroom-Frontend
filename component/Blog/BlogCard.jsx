

import { SquareArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogCard = () => {
  const cards = Array(6).fill({
    title: "Blog Post Title 1 Blog Post Title 1 Blog Post Title 1",
    author: "NikoNeznanovic",
    date: "June 23, 2024",
    content: "Blog post title 1 text text text text texttext text text text text text text text text text text text text text text text text text text text...",
    tags: ["Accounts", "League of Legends"]
  });

  return (
    <div className="min-h-screen bg-[#042534] p-10">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#0a1f2d] rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/image/Blogcard.jpg"
                alt="Fantasy Castle"
                width={400}
                height={250}
                className="object-cover w-full"
                priority={index < 2}
              />
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                <span>by</span> <span className="text-cyan-400"> {card.author}</span>
                
                <span>{card.date}</span>
              </div>
              
              <h3 className="text-white text-lg font-medium mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {card.content}
              </p>
              
              <div className="flex space-x-2">
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded text-sm ${
                      tagIndex === 0 
                        ? 'bg-[#1a2b36] text-cyan-400' 
                        : 'bg-[#1a2b36] text-orange-400'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-[#1a2b36] border-cyan-200 rounded-lg flex items-center justify-center">
                    
                    <span className="text-cyan-400"><SquareArrowRight/></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-[#017F7B] text-white px-8 py-2 rounded hover:bg-[#1a4d6a] transition-colors">
          SHOW MORE
        </button>
      </div>
    </div>
  );
};

export default BlogCard;