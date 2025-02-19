import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { axiosInstance } from "@/utils/axios";

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

export async function getLayoutData() {
  try {
    const res = await axiosInstance.get('/services');
    const services = res.data.services;

    return {
      services,
      revalidate: 3600,
    };
  } catch (error) {
    return {
      services: [],
      revalidate: 3600,
    };
  }
}

export default Layout;