import { Geist, Geist_Mono } from "next/font/google"; 
import { axiosInstance } from "@/utils/axios";
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
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

export default function Home({ services }) {
  return (
    <CommonLayout services={services}>
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
      <Footer />
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const layoutData = await getLayoutData();
  
  return {
    props: {
      services: layoutData.services,
    },
    revalidate: layoutData.revalidate,
  };
}