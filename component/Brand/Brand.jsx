import React from "react";
import BrandManagement from "./Brand_Section";
import Sidebar from "../common/Sidebar";


function Brand() {
  return (
    <> 
    
    <div className="w-full flex">
      <div className="w-[16%]">
        <Sidebar/>
      </div>
      <div className="w-[84%] ">
      <BrandManagement/>
      
      </div>
    </div>
    </>
  );
}

export default Brand;
