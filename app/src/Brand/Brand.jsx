import React from "react";
import BrandManagement from "./Brand_Section";
import Sidebar from "../Sidebar/Sidebar";


function Brand() {
  return (
    <> 
    <div className="w-full flex">
      <div className="w-1/5">
        <Sidebar/>
      </div>
      <div className="w-4/5 ">
      <BrandManagement/>
      
      </div>
    </div>
    </>
  );
}

export default Brand;
