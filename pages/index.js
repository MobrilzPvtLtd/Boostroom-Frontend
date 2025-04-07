import { Geist, Geist_Mono } from "next/font/google"; 
import { axiosInstance } from "@/utils/axios";
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import HeroSection from "@/component/Home/HeroSection";
import PopularServices from "@/component/Home/PopularServices"; 
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

// Helper function to filter and flatten brands by service name
const getGamesByService = (brands, serviceName) => {
  return brands
    .filter(brand => brand.service.name === serviceName)
    .flatMap(service => service.brands);
};

export default function Home({ services, brands }) {
  // Use the helper function for each category
  const boostingGames = getGamesByService(brands, 'Boosting');
  const topUpGames = getGamesByService(brands, 'Direct Top Up');
  const giftCardGames = getGamesByService(brands, 'Gift Cards');
  const itemGames = getGamesByService(brands, 'Items');
  const gameCoinsGames = getGamesByService(brands, 'Games Coins');
  const coachingGames = getGamesByService(brands, 'Coaching');
  const skinGames = getGamesByService(brands, 'Skins');

  console.log("Boosting Games:", boostingGames);

  return (
    <CommonLayout services={services}>
      <HeroSection />
      <PopularServices services={services} />
      <HotGamesSection boostingServices={boostingGames} />
      <FeatureSection />
      <TopUpServices topUpServices={topUpGames} />
      <GiftCardSection giftCards={giftCardGames} />
      <HowItWorksSection />
      <TrendingServices 
        skinGames={skinGames}
        itemGames={itemGames} 
        gameCoinsGames={gameCoinsGames} 
        coachingGames={coachingGames} 
      />
      <BlogSection />
      <CTASection />
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const layoutData = await getLayoutData();

  // Extract service IDs from layoutData.services
  const serviceIds = layoutData.services.map(service => service.id);

  // Fetch brands-by-service-ids
  let brands = [];
  try {
    const brandsResponse = await axiosInstance.post('/get-brands-by-service-ids', {
      service_ids: serviceIds,
    });
    brands = brandsResponse.data.data || [];
    
  } catch (error) {
    console.error("Error fetching brands-by-service-ids:", error);
  }

  return {
    props: {
      services: layoutData.services,
      brands, 
    },
    revalidate: layoutData.revalidate, // Use REVALIDATE_TIME from layoutData
  };
}