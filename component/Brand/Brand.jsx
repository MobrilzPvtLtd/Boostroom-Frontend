import React from "react";
import BrandManagement from "./Brand_Section";
import Sidebar from "../common/Sidebar";
import CommonCard from "@/component/Brand/CommonCard";
import OfferCard from "@/component/Brand/OfferCard";
import PromotionCard from "@/component/Brand/PromationCard";
import TextArea from "@/component/Boosting/TextArea";
import RelatedBrand from "@/component/Brand/RelatedBrand"

function Brand() {
  const buttonsData = [
    { label: "Game Coins", count: "12560 offers" },
    { label: "Boosting", count: "200 offers" },
    { label: "Coaching", count: "60 offers" },
    { label: "Items", count: "100MO offers" },
    { label: "Accounts", count: "5 offers" },
    { label: "Rent A Gamer", count: "5 offers" },
  ];
  return (
    <> 
    
    <CommonCard  title="WoW Gold" buttons={buttonsData} />
      <PromotionCard/>
      <OfferCard/>
      <RelatedBrand/>
      <TextArea/>
    </>
  );
}

export default Brand;
