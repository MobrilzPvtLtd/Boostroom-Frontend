import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferDetails from './OfferDetails'
import SellerInfoCard from './SellerInfo'
import SellerList from './SellerList'

function BrandDetails() {
  return (
    <>
     <CommonCard/> 
     <div className="flex gap-3">
        <div className="md:w-[65%]">
        <OfferDetails/>
        </div>
        <div className="md:w-[35%]">

        <SellerInfoCard/>
        </div>
     </div>
     <SellerList/>
     
     
    </>
  )
}

export default BrandDetails
