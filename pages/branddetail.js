import BrandDetails from '@/component/Branddetails/BrandDetails'
import React from 'react'
import CommonLayout ,{ getLayoutData }from "@/component/Layout/CommonLayout";

function branddetail({services}) {
  return (
    <>
    <CommonLayout services={services} > 
      <BrandDetails/>
      </CommonLayout>
    </>
  )
}

export default branddetail


export async function getStaticProps() {
    const layoutData = await getLayoutData();
  
    return {
      props: {
        services: layoutData.services,
      },
      revalidate: layoutData.revalidate,
    };
  }
  