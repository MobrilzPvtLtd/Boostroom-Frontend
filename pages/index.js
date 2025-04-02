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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ services, hotBoostingGames, trendingTopUpServices }) {
  return (
    <CommonLayout services={services}>
      <HeroSection />
      <PopularServices services={services} />
      <HotGamesSection hotBoostingGames={hotBoostingGames} />
      <FeatureSection />
      {/* <TestimonialsSection /> */}
      <TopUpServices trendingTopUpServices={hotBoostingGames} /> {/* Pass new data */}
      <GiftCardSection  giftCards={hotBoostingGames}/>
      <HowItWorksSection />
      <TrendingServices />
      <BlogSection />
      <CTASection /> 
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const layoutData = await getLayoutData();

  // API call for hot boosting games
  const hotGamesResponse = await axiosInstance.get('/hot-boosting-games');
  const hotBoostingGames = hotGamesResponse.data.data || [];

  // API call for trending top-up services
  const trendingResponse = await axiosInstance.get('/trending-top-up-services');
  const trendingTopUpServices = trendingResponse.data.data || [];

  return {
    props: {
      services: layoutData.services,
      hotBoostingGames, // Pass hot boosting games data
      trendingTopUpServices, // Pass trending top-up services data
    },
    revalidate: layoutData.revalidate,
  };
}