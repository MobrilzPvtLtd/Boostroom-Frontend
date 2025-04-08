import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import FullSelection from "@/component/Boosting/FullSelection";
import LevelingSection from "@/component/Boosting/Leveling"; 
import TextArea from "@/component/Boosting/TextArea";
import TrendingNow from "@/component/Boosting/TrendingNow";
import { useRouter } from "next/router";

export default function Home({ services }) {
  const router = useRouter();
  const { servicename } = router.query;

  // Find the current service based on the servicename
  const currentService = services.find(
    (service) => service.slugs.some((slug) => slug.slug === servicename)
  );
  // Redirect to homepage if the service is not found
  if (!currentService) {
    if (typeof window !== "undefined") {
      router.push("/");
    }
    return null; // Prevent rendering on the server
  }

  return (
    <>
      <CommonLayout services={services} selectedService={currentService}>
        <LevelingSection service={currentService} />
        <TrendingNow service={currentService} />
        <FullSelection service={currentService} />
        <TextArea />
        {/* <FeatureSection/> */}
      </CommonLayout>
    </>
  );
}

export async function getStaticPaths() {
  const servicesData = await getLayoutData();

  // Access the `services` array and extract all slugs
  const paths = servicesData.services.flatMap((service) => {
    // Map all slugs for the service
    return service.slugs.map((slug) => ({
      params: { servicename: slug.slug }, // Use each slug for the URL
    }));
  });

  return {
    paths,
    fallback: 'blocking',
  };
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