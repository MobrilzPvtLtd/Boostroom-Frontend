import BlogCard from "@/component/Blog/BlogCard";
import BlogNavbar from "@/component/Blog/BlogNavbar";
import BlogText from "@/component/Blog/BlogText";
import LatestPost from "@/component/Blog/LatestPost";
import PopularTags from "@/component/Blog/PopularTag"; 
import CommonLayout, { getLayoutData } from "@/component/Layout/CommonLayout";

export default function Home({ services }) {
  return (
    <> 
      <CommonLayout services={services}>
        <BlogText />
        <BlogNavbar />
        <div className="w-full flex">
          <div className="w-[70%] ">
            <BlogCard />
          </div>
          <div className="w-[30%] bg-[#042534]">
            <LatestPost />
            <PopularTags />
          </div>
        </div> 
      </CommonLayout> 
    </>
  )
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