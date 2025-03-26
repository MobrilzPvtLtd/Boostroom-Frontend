import React from 'react'
import CommonCard from '../Brand/CommonCard'
import OfferCard from '../Brand/OfferCard'
import GemsCard from './GemsCard'
import PromotionCard from '../Brand/PromationCard'

function DirectTopUp() {
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
      <CommonCard title="Brawls Star Gems" buttons={buttonsData}/>
      <PromotionCard/>
      <GemsCard/>
    </>
  )
}

export default DirectTopUp
