import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { axiosInstance } from "@/utils/axios";
import Footer from '../common/Footer';

const Layout = ({ children, services }) => {
  return (
    <div className="w-full flex">
      <div className="w-[15.5%] h-[100vh] overflow-auto custom-scrollbar">
        <Sidebar services={services} />
      </div>
      <div className="w-[84.5%] h-[100vh] overflow-auto custom-scrollbar">
        <Header />
        <div className='mt-24'>
          {children}
        </div>
        <Footer/>
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