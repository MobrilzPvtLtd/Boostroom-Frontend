import Brand from "@/component/Brand/Brand";

import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";

export default function Home({ services }) {
  return (
    <>
      <CommonLayout services={services}>

        <Brand />
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
