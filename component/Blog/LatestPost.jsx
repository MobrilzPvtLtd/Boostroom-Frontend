import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function LatestPost() {
  const latestPosts = Array(5).fill({
    title: "Best Elo Ranking Service World-wide",
    category: "League of Legends",
  });
  return (
    <>
      <div className=" h-fit w-full bg-[#042534]  ">
        {/* Glass-like container */}
        <div
          className="max-w-md   pt-8 pr-10 rounded-xl  "
        >
          {/* Search Section */}
          <h2 className="text-white text-xl font-semibold mb-4">
            Search Posts
          </h2>
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts"
              className="w-full bg-[#0a1f2d] text-gray-300 pl-10 pr-4 py-2 rounded-lg 
                     border border-[#133c52] focus:outline-none
                     placeholder-gray-500 shadow-inner transition-all duration-300
                     hover:bg-[#0c2435] focus:bg-[#0c2435]"
            />
          </div>

          {/* Latest Posts Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Latest Posts
            </h2>
            <div className="space-y-4">
              {latestPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer p-2 
                         rounded-lg transition-all duration-300
                         hover:bg-[#0a1f2d]/50"
                >
                  <div className="relative h-16 w-20">
                    <Image
                      src="/image/level_pic.jpg"
                      alt="Right gaming setup"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-white text-sm font-medium group-hover:text-cyan-400 
                               transition-colors line-clamp-2"
                    >
                      {post.title}
                    </h3>
                    <span
                      className="text-[#ff9900] text-xs inline-block mt-1
                                hover:text-[#ffad33] transition-colors bg-black/30 rounded px-2 py-1 "
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff9900]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </>
  );
}

export default LatestPost;
