import BlogCard from "@/component/Blog/BlogCard";
import BlogNavbar from "@/component/Blog/BlogNavbar";
import BlogText from "@/component/Blog/BlogText";
import LatestPost from "@/component/Blog/LatestPost";
import PopularTags from "@/component/Blog/PopularTag";
import Header from "@/component/common/Header";
import Sidebar from "@/component/common/Sidebar";
import Footer from "@/component/Home/Footer";

export default function Home ({ services }){
    return(
        <>
        
        <div className="w-full flex">
        <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar">
          <Sidebar services={services} />
        </div>
        <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar">
          <Header />
          <div>
            <BlogText />
            <BlogNavbar/>
            <div className="w-full flex">  
            <div className="w-[60%] "> 
            <BlogCard/>
            </div>
             <div className="w-[40%] bg-[#042534]">

            <LatestPost/>
            <PopularTags/>
             </div>
             </div>
            <Footer/>
          </div>
        </div>
      </div>
        
        </>
    )
}