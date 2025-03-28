import React, { useState } from "react";
import { Globe, Clock } from "lucide-react";

function OfferCard() {
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
        <div className="text-gray-400 mb-4">About 17,245 results.</div>

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
