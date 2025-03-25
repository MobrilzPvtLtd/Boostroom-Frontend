 
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