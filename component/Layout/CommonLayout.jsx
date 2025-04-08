import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { axiosInstance } from "@/utils/axios";
import Footer from '../common/Footer';

// Access the revalidate time from the environment variable
const REVALIDATE_TIME = process.env.REACT_APP_REVALIDATE_TIME || 3600;

const Layout = ({ children, services, selectedService }) => {
  return (
    <div className="w-full flex">
      <div className="w-[15.5%] h-[100vh] overflow-auto custom-scrollbar">
        <Sidebar services={services} selectedService={selectedService} />
      </div>
      <div className="w-[84.5%] h-[100vh] overflow-auto custom-scrollbar">
        <Header />
        <div className='mt-[92px]'>
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
      revalidate: REVALIDATE_TIME, // Use the environment variable
    };
  } catch (error) {
    return {
      services: [],
      revalidate: REVALIDATE_TIME, // Use the environment variable
    };
  }
}

export default Layout;