import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const Layout = ({ children, services }) => {
  return (
    <div className="w-full flex">
      <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar">
        <Sidebar services={services} />
      </div>
      <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar">
        <Header />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

 
export default Layout;