import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import FullSelection from "@/component/Boosting/FullSelection";
import LevelingSection from "@/component/Boosting/Leveling"; 
import TextArea from "@/component/Boosting/TextArea";
import TrendingNow from "@/component/Boosting/TrendingNow";
import { useRouter } from "next/router";
import { axiosInstance } from "@/utils/axios"; // Import axiosInstance

export default function Home({ services, trendingData, fullSelectionData }) {
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
        <TrendingNow trendingData={trendingData} />
        <FullSelection fullSelectionData={fullSelectionData} />
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

export async function getStaticProps({ params }) {
  const layoutData = await getLayoutData();

  // Find the current service based on the servicename
  const currentService = layoutData.services.find((service) =>
    service.slugs.some((slug) => slug.slug === params.servicename)
  );

  // Fetch additional data for TrendingNow if the service exists
  let trendingData = null;
  let fullSelectionData = null;

  if (currentService) {
    try {
      // Fetch trending data
      const trendingResponse = await axiosInstance.post('/get-brands-by-service-ids', {
        service_ids: [currentService.id],
      });

      const trendingResponseData = trendingResponse.data.data;
      const trendingServiceData = trendingResponseData.find(item => item.service.id === currentService.id);

      if (trendingServiceData) {
        trendingData = {
          service: trendingServiceData.service, // Full service object
          brands: trendingServiceData.brands,  // Return the complete brand data
        };
      } else {
        trendingData = {
          service: {},
          brands: [],
        };
      }

      // Fetch full selection data
      const fullSelectionResponse = await axiosInstance.get(`/brands-by-service?service_id=${currentService.id}`);
      fullSelectionData = fullSelectionResponse.data; 

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return {
    props: {
      services: layoutData.services,
      trendingData, // Pass the complete data to the page
      fullSelectionData, // Pass the full selection data to the page
    },
    revalidate: layoutData.revalidate,
  };
}