import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferDetails from './OfferDetails'
import SellerInfoCard from './SellerInfo'
import SellerList from './SellerList'
import { ArrowLeft } from 'lucide-react'

function BrandDetails() {
  return (
    <>
    <div className="w-full ">
      <CommonCard />
      
      <div className="flex justify-end bg-dark-300 pt-6 px-6">
        <button className="flex text-sm items-center gap-2 px-2 py-1 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-sm bg-transparent hover:bg-yellow-500 hover:text-black transition">
          <ArrowLeft size={20} />
          BACK TO FULL SELECTION
        </button>
      </div>

      <div className="bg-dark-300 px-4 py-6 md:px-6 md:py-8 w-full shadow-sm">
        <h2 className="bg-dark-500 p-4 md:p-6 text-xl md:text-2xl text-white">
          Kazzak EU - Horde
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-dark-300 p-4 md:p-6">
        <div className="w-full md:w-2/3">
          <OfferDetails />
        </div>
        <div className="w-full md:w-1/3">
          <SellerInfoCard />
        </div>
      </div>

      <div className="">
        <SellerList />
      </div>
    </div>
     
     
    </>
  )
}

export default BrandDetails
