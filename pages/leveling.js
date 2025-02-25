import Header from "@/component/common/Header";
import Sidebar from "@/component/common/Sidebar";
import CTASection from "@/component/Home/CTASection";
import FeatureSection from "@/component/Home/FeatureSection";
import Footer from "@/component/Home/Footer";
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import FullSelection from "@/component/Leveling/FullSelection";
import LevelingSection from "@/component/Leveling/Leveling"; 
import TextArea from "@/component/Leveling/TextArea";
import TrendingNow from "@/component/Leveling/TrendingNow";

export default function Home({ services }) {
  return (
    <>
      <CommonLayout services={services}>
        <LevelingSection />
        <TrendingNow />
        <FullSelection/>
        <TextArea/>
        {/* <FeatureSection/> */}
        <Footer/>
      </CommonLayout>
    </>
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