import Brand from "@/component/Brand/Brand";
import CommonCard from "@/component/Brand/CommonCard";
import OfferCard from "@/component/Brand/OfferCard";
import PromotionCard from "@/component/Brand/PromationCard";
import CommonLayout from "@/component/Layout/CommonLayout";
import TextArea from "@/component/Leveling/TextArea";

export default function Home({services}) {
    return (
        <>
      <CommonLayout services={services}>
      <CommonCard/>
      <PromotionCard/>
      <OfferCard/>
      <TextArea/>
        {/* <Brand/> */}
      </CommonLayout>

   
        
        </>

    );
}
