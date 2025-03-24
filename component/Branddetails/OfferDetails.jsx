import React from "react";

const OfferDetails = () => {
  return (
    <div className="bg-dark-500 text-white p-6 md:p-10 rounded-lg">
      <h2 className="text-xl font-bold text-fuchsia-500 mb-4">Offer Information</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#1A1A40] p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400">🎮</span>
          <div>
            <p className="text-gray-400 text-sm">Service</p>
            <p className="font-semibold">Game Coins</p>
          </div>
        </div>

        <div className="bg-[#1A1A40] p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400">📦</span>
          <div>
            <p className="text-gray-400 text-sm">Delivery Method</p>
            <p className="font-semibold">Face to Face • Mail • Auction House</p>
          </div>
        </div>

        <div className="bg-[#1A1A40] p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400">📍</span>
          <div>
            <p className="text-gray-400 text-sm">Region</p>
            <p className="font-semibold">EU</p>
          </div>
        </div>

        <div className="bg-[#1A1A40] p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400">⏳</span>
          <div>
            <p className="text-gray-400 text-sm">Delivery Time</p>
            <p className="font-semibold">24 Hours</p>
          </div>
        </div>

        <div className="bg-[#1A1A40] p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400">🖥️</span>
          <div>
            <p className="text-gray-400 text-sm">Server</p>
            <p className="font-semibold">Kazzak EU - Horde</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-fuchsia-500 mt-6">More Details</h3>
      <p className="text-gray-300 mt-2">
        Please contact us in the Masterloot chat room before making a purchase. Thank you!
      </p>
      <p className="text-gray-300 mt-2">
        If you would like to place a custom order for World of Warcraft or any other game, please feel free to contact us via the Masterloot chat. We will be happy to assist you.
      </p>

      {/* <h3 className="text-lg font-bold text-pink-500 mt-6">Your Benefits with Boostroom</h3> */}
      <ul className="text-gray-300 mt-2 space-y-2">
        <li>✅ We are a premium service providing top-quality boosting and coaching for over 10 years.</li>
        <li>✅ Completed over 10,000 boosting orders with 99.9% positive reviews.</li>
        <li>✅ Our team consists of highly skilled professionals.</li>
        <li>✅ No banned programs or exploits used—manual processing only.</li>
      </ul>

      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg">
        VIEW MORE
      </button>
    </div>
  );
};

export default OfferDetails;
