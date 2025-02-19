import Header from "@/component/common/Header";
import Sidebar from "@/component/common/Sidebar";
import CTASection from "@/component/Home/CTASection";
import FeatureSection from "@/component/Home/FeatureSection";
import Footer from "@/component/Home/Footer";
import FullSelection from "@/component/Leveling/FullSelection";
import Leveling from "@/component/Leveling/Leveling";
import TextArea from "@/component/Leveling/TextArea";
import TrendingNews from "@/component/Leveling/TrendingNews";

export default function Home({ services }) {
  return (
    <>
      <div className="w-full flex">
        <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar">
          <Sidebar services={services} />
        </div>
        <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar">
          <Header />
          <div>
            <Leveling />
            <TrendingNews />
            <FullSelection/>
            <TextArea/>
            <FeatureSection/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}
