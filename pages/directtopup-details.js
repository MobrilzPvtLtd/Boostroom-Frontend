import Brand from "@/component/Brand/Brand";
import DirectTopUpDetails from "@/component/DirectTopUp_Details.jsx/DirectTopUpDetails";
import DirectTopUp from "@/component/DirectTopUp_Details.jsx/DirectTopUpDetails";

import CommonLayout ,{ getLayoutData }from "@/component/Layout/CommonLayout";

export default function Home({services}) {
    return (
        <>
      <CommonLayout services={services}>
      
        <DirectTopUpDetails/>
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
