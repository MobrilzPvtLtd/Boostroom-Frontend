import Brand from "@/component/Brand/Brand";
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";
import { axiosInstance } from "@/utils/axios"; // Import axiosInstance

export default function Home({ services, selectedService }) {
  return (
    <>
      <CommonLayout services={services} selectedService={selectedService}>
        <Brand />
      </CommonLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const layoutData = await getLayoutData();
  const { categoriename } = params;

  // Check if the categoriename array has valid game and service slugs
  if (!categoriename || categoriename.length < 2) {
    return { notFound: true }; // Return 404 if slugs are invalid
  }

  const [gameSlug, serviceSlug] = categoriename;

  try {
    // Fetch the list of games to validate the requested game and service
    const response = await axiosInstance.get('/brands');
    const games = response.data.brands;

    // Find the requested game
    const game = games.find((g) => g.slugs.some((s) => s.slug === gameSlug));
    if (!game) {
      return { notFound: true }; // Return 404 if the game does not exist
    }

    // Find the requested service
    const service = game.associated_services.find((s) =>
      s.slugs.some((s) => s.slug === serviceSlug)
    );
    if (!service) {
      return { notFound: true }; // Return 404 if the service does not exist
    }

    return {
      props: {
        services: layoutData.services,
        selectedService: service, // Pass the selected service to the component
        gamename: gameSlug,
      },
      revalidate: layoutData.revalidate,
    };
  } catch (error) {
    console.error("Error validating game or service:", error);
    return { notFound: true }; // Return 404 in case of an error
  }
}

export async function getStaticPaths() {
  try {
    // Fetch the list of games from the /brands endpoint
    const response = await axiosInstance.get('/brands');
    const games = response.data.brands;

    const paths = [];

    // Iterate through each game
    games.forEach((game) => {
      // Add paths for the game's main slug
      game.slugs.forEach((gameSlug) => {
        // Add paths for the associated services of the game
        game.associated_services.forEach((service) => {
          service.slugs.forEach((serviceSlug) => {
            paths.push({
              params: {
                categoriename: [gameSlug.slug, serviceSlug.slug], // Combine game slug and service slug
              },
            });
          });
        });
      });
    });

    return {
      paths,
      fallback: "blocking", // Use 'blocking' to render non-predefined paths on demand
    };
  } catch (error) {
    console.error("Error fetching games:", error);
    return {
      paths: [],
      fallback: "blocking", // Still allow fallback rendering even if fetching fails
    };
  }
}
