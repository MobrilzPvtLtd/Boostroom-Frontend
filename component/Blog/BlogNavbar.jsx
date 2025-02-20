import React from "react";

function BlogNavbar() {
  const items = [
    "All Cards",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",
  "League of Legends",]
    
  return (
    <>
      <div className="w-full bg-[#042534] pt-10 px-10 ">
        <div className="flex flex-wrap space-x-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-cyan-800 px-4 py-2 m-2 rounded text-white text-xs hover:bg-[rgb(47,185,223)] transition-colors cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogNavbar;
