import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferDetails from './OfferDetails'
import SellerInfoCard from './SellerInfo'
import SellerList from './SellerList'

function BrandDetails() {
  return (
    <>
    <CommonCard />
<div className="flex flex-col md:flex-row gap-3 bg-dark-300 ">
  <div className="w-full md:w-[65%]">
    <OfferDetails />
  </div>
  <div className="w-full md:w-[35%]">
    <SellerInfoCard />
  </div>
</div>
<SellerList />

     
     
    </>
  )
}

export default BrandDetails
