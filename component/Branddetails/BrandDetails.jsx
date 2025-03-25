import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferDetails from './OfferDetails'
import SellerInfoCard from './SellerInfo'
import SellerList from './SellerList'

function BrandDetails() {
  return (
    <>
    <CommonCard />
    <div className="bg-dark-300 px-4 py-6 md:px-4 md:py-8 w-full shadow-sm">
  <h2 className="bg-dark-500 p-4 md:p-6 text-xl md:text-2xl ">
    Kazzak EU - Horde
  </h2>
</div>

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
