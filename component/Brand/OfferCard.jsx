import React, { useState } from "react";
import { Globe, Clock, SlidersHorizontal } from "lucide-react";

function OfferCard() {
    const [onlineSellers, setOnlineSellers] = useState(false);
  const [offers] = useState([
    {
      id: 1,
      title: "Kazzak EU - Horde",
      region: "EU",
      deliveryTime: "1 Hour",
      price: "0.035232",
      currency: "USD",
      offersCount: 14565,
    },
  ]);

  return (
    <>
      <div className="bg-dark-300 p-6 text-white">
        <div className="text-gray-400 mb-4 flex justify-between items-center">
          <p>About 17,245 results.</p>
          <div className="flex items-center space-x-4 ">
              <label className="flex items-center space-x-2 cursor-pointer">
                <span className="text-sm">Online Sellers</span>
                <div
                  className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                    onlineSellers ? "bg-yellow-400" : "bg-gray-600"
                  }`}
                  onClick={() => setOnlineSellers(!onlineSellers)}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full shadow-md transform transition ${
                      onlineSellers ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
              <button className="text-sm hover:text-yellow-400 transition">
                Recommended
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700 transition">
                <SlidersHorizontal className="w-5 h-5 text-yellow-400" />
              </button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-dark-500 p-4 rounded-lg">
              <h2 className="text-lg font-bold">{offer.title}</h2>

              <div className="flex items-center gap-2 pt-8 text-gray-300">
                <Globe size={16} className="text-yellow-400" />
                <span>{offer.region}</span>
                <Clock size={16} className="text-yellow-400" />
                <span>{offer.deliveryTime}</span>
              </div>

              <div className="border-t border-yellow-500 my-2"></div>

              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">
                  from{" "}
                  <span className="text-white font-bold">{offer.price}</span>{" "}
                  {offer.currency}
                </p>
                <button
                  className="bg-dark-100 text-fuchsia-500 p-1 rounded text-sm"
                  aria-label={`${offer.offersCount} offers available`}
                >
                  {offer.offersCount} offers
                </button>
              </div>
            </div>
          ))}

          {/* Placeholder Cards */}
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-dark-500 p-4 rounded-lg h-40 animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex justify-center bg-dark-300 py-4">
        <button className="bg-yellow-500 text-black p-2 px-10 font-bold rounded text-sm">
          LOAD MORE OFFER
        </button>
      </div>
    </>
  );
}

export default OfferCard;
