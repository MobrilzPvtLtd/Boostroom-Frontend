
import { Geist, Geist_Mono } from "next/font/google"; 
import { axiosInstance } from "@/utils/axios";
import Sidebar from "@/component/common/Sidebar";
import Header from "@/component/common/Header";
import HeroSection from "@/component/Home/HeroSection";
import PopularServices from "@/component/Home/PopularServices";
import TestimonialsSection from "@/component/Home/Testimonials";
import GiftCardSection from "@/component/Home/GiftCard";
import TopUpServices from "@/component/Home/TopUpServices";
import HowItWorksSection from "@/component/Home/HowItWorks";
import TrendingServices from "@/component/Home/TrendingServices";
import HotGamesSection from "@/component/Home/HotGames";
import FeatureSection from "@/component/Home/FeatureSection";
import BlogSection from "@/component/Home/BlogSection";
import CTASection from "@/component/Home/CTASection";
import Footer from "@/component/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home ({ services })  {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar">
          <Sidebar services={services} />
        </div>
        <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar">
          <Header />
          <div>
            <HeroSection />
            <PopularServices />
            <HotGamesSection />
            <TestimonialsSection />
            <GiftCardSection />
            <TopUpServices />
            <HowItWorksSection />
            <TrendingServices />
            <FeatureSection />
            <BlogSection />
            <CTASection />
            < Footer />
          </div>
        </div>
      </div>
    </>
  );
};


// export async function getStaticProps() {
//   // Fetch data from an API or database
//   const res = await axiosInstance.get('/services');
//   const services = await res.data.services

//   return {
//     props: {
//       services,
//     },
//   };
// } 