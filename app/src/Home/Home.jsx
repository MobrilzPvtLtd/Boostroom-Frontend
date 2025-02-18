import React from 'react'
import Sidebar from '../common/Sidebar'
import Header from '../common/Header'
import HeroSection from './HeroSection'
import PopularServices from './PopularServices'
import HotGamesSection from './HotGames'
import TestimonialsSection from './Testimonials'

function Home() {
  return (

    <>
      <div className="w-full flex">
        <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar ">
          <Sidebar />
        </div>
        <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar ">
          <Header />
          <div>
            <HeroSection />
            <PopularServices /> 
            <HotGamesSection />
            <TestimonialsSection />
          </div>
        </div>
      </div>


    </>
  )
}

export default Home