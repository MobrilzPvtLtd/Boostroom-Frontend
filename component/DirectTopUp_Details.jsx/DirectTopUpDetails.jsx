"use client"

import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferDetails from '../Branddetails/OfferDetails'
import SellerInfoCard from '../Branddetails/SellerInfo'
import SellerList from '../Branddetails/SellerList'
import { ArrowLeft } from 'lucide-react'
import Denominations from './Denominations'
import GemsOfferCard from './GemsOfferCard'

function DirectTopUpDetails() {
    const buttonsData = [
        { label: "Game Coins", count: "12560 offers" },
        { label: "Boosting", count: "200 offers" },
        { label: "Coaching", count: "60 offers" },
        { label: "Items", count: "100MO offers" },
        { label: "Accounts", count: "5 offers" },
        { label: "Direct Top Up", count: "5 offers" },
      ];
  return (
    <>
       <div className="w-full ">
      <CommonCard  buttons={buttonsData} />
      
      <div className="flex justify-end bg-dark-300 pt-6 px-6">
        <button className="flex text-sm items-center gap-2 px-2 py-1 border-2 border-yellow-500 text-yellow-500 font-bold rounded-md bg-transparent hover:bg-yellow-500 hover:text-black transition">
          <ArrowLeft size={20} className='text-sm' />
          BACK TO FULL SELECTION
        </button>
      </div>

      <div className="bg-dark-300 px-4 py-6 md:px-6 md:py-8 w-full shadow-sm">
        <h2 className="bg-dark-500 p-4 md:p-6 text-xl md:text-2xl text-white">
          2000 Gems
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-dark-300 p-4 md:p-6">
        <div className="w-full md:w-2/3">
          <GemsOfferCard />
        </div>
        <div className="w-full md:w-1/3">
          <SellerInfoCard />
        </div>
      </div>
            <Denominations/>
      <div className="">
        <SellerList />
      </div>
    </div>
    </>
  )
}

export default DirectTopUpDetails
