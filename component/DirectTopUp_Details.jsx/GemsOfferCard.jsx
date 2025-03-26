import { Clock4, Database, Gavel, Mail, MailIcon, MapPin, Package, Tags, Users } from "lucide-react";
import React from "react";

const GemsOfferCard = () => {
  return (
    <div className="bg-dark-500 text-white p-6 md:p-10 rounded-lg ms-3">
      <h2 className="text-xl font-bold text-fuchsia-500 mb-4">Offer Information</h2>
      <div className="grid md:grid-cols-3 gap-4">
      {/* <div className="flex gap-3 mb-2">   */}
        <div className="bg-dark-100 p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400"><Tags /></span>
          <div>
            <p className="text-gray-400 text-sm">Service</p>
            <p className="font-semibold">Direct Top Up</p>
          </div>
        </div>

        <div className="bg-dark-100 py-4 px-6 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400"><Package /></span>
          <div>
            <p className="text-gray-400 text-sm">Delivery Method</p>
            <p className="font-semibold">direct top up</p>
          </div>
        </div>
        {/* </div> */}
        
        <div className="bg-dark-100 p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400"><MapPin /></span>
          <div>
            <p className="text-gray-400 text-sm">Region</p>
            <p className="font-semibold">Global</p>
          </div>
        </div>

        <div className="bg-dark-100 p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400"><Clock4 /></span>
          <div>
            <p className="text-gray-400 text-sm">Delivery Time</p>
            <p className="font-semibold">15 mins</p>
          </div>
        </div>

        <div className="bg-dark-100 p-4 rounded-lg flex items-center gap-3">
          <span className="text-yellow-400"><Database /></span>
          <div>
            <p className="text-gray-400 text-sm">Denomination</p>
            <p className="font-semibold">2000 Gems</p>
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
      <ol className="text-gray-300 mt-2 space-y-2 list-decimal list-inside">
        <li> We are a premium service providing top-quality boosting and coaching for over 10 years.</li>
        <li> Completed over 10,000 boosting orders with 99.9% positive reviews.</li>
        <li> Our team consists of highly skilled professionals.</li>
        <li> No banned programs or exploits used—manual processing only.</li>
      </ol>

      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-sm">
        VIEW MORE
      </button>
    </div>
  );
};

export default GemsOfferCard;
