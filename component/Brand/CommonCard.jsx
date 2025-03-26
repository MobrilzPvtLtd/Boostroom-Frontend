import Head from 'next/head';
import React from 'react'

function CommonCard({title ,buttons}) {

  return (
    <>
      <div className=" bg-dark-300 ">
    

      <main className=" p-4">
        {/* Header */}
        <h1 className="text-2xl font-bold text-white mb-6 bg-dark-500 p-3">{title}</h1>

        {/* Button Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {buttons?.map((button, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg shadow-lg text-white flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-dark-100 hover:bg-yellow-400 hover:text-black`}
            >
              <span className="text-lg font-semibold">{button?.label}</span>
              <span className="text-sm opacity-80">{button?.count}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default CommonCard
