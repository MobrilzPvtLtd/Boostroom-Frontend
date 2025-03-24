import React from "react";
import BrandManagement from "./Brand_Section";
import Sidebar from "../common/Sidebar";
import CommonCard from "@/component/Brand/CommonCard";
import OfferCard from "@/component/Brand/OfferCard";
import PromotionCard from "@/component/Brand/PromationCard";
import TextArea from "@/component/Leveling/TextArea";
import RelatedBrand from "@/component/Brand/RelatedBrand"

function Brand() {
  return (
    <> 
    
    <CommonCard/>
      <PromotionCard/>
      <OfferCard/>
      <RelatedBrand/>
      <TextArea/>
    </>
  );
}

export default Brand;
