import Head from 'next/head';
import React from 'react'

function CommonCard() {
    const buttons = [
        { label: "Game Coins", count: "12560 offers",},
        { label: "Boosting", count: "200 offers",  },
        { label: "Coaching", count: "60 offers",},
        { label: "Items", count: "100MO offers",  },
        { label: "Accounts", count: "5 offers",  },
        { label: "Rent A Gamer", count: "5 offers", },
      ];
  return (
    <>
      <div className=" bg-dark-300 ">
      <Head >
        <title className="bg-dark-500">WoW Gold</title>
        <meta name="description" content="WOW Gold Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-white mb-6 bg-dark-500 p-3">WoW Gold</h1>

        {/* Button Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg shadow-lg text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-dark-100 hover:bg-yellow-400 hover:text-black`}
            >
              <span className="text-lg font-semibold">{button.label}</span>
              <span className="text-sm opacity-80">{button.count}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default CommonCard
