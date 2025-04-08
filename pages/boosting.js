 
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import FullSelection from "@/component/Boosting/FullSelection";
import LevelingSection from "@/component/Boosting/Leveling"; 
import TextArea from "@/component/Boosting/TextArea";
import TrendingNow from "@/component/Boosting/TrendingNow";

export default function Home({ services }) {
  return (
    <>
      <CommonLayout services={services}>
        <LevelingSection />
        {/* <TrendingNow /> */}
        {/* <FullSelection/> */}
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