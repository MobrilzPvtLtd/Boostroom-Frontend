import Image from "next/image";
import React, { useState } from "react";

const SellerInfoCard = () => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 0.0336; // Price per K Gold
  const totalPrice = (quantity * 50).toFixed(2); // Adjust price dynamically

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 1000)); // Max limit: 1000K
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // Min limit: 1K
  };

  return (
    <div className="bg-dark-500 text-white p-6 rounded-lg w-full max-w-md mx-auto">
      {/* Seller Information */}
      <div className=" p-4 rounded-lg  relative h-48 bg-cover bg-center"
      style={{ backgroundImage: "url('/image/sellerinfo-bg.png')" }}>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-fuchsia-500">Seller Information</h2>
          <span className="text-red-500 text-sm">🚀 Promoted Seller</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <img
            src="/image/cardicon.jpg"
            alt="Seller Avatar"
            className="w-12 h-12 rounded-sm"
          />
          <div>
            <p className="text-xl font-bold flex items-center">
              boostroom <span className="text-blue-500 ml-1">✔️</span>
            </p>
            <p className="text-green-400 text-sm">100% Order Success Score</p>
          </div>
        </div>
        <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold p-2  rounded-lg w-48">
           CONTACT SELLER
        </button>
      </div>

      {/* Quantity Selector */}
      <div className="bg-[#1A1A40] mt-6 p-4 rounded-lg flex justify-between items-center">
        <button
          className="text-xl font-bold bg-gray-700 px-3 py-1 rounded-lg"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="text-lg font-bold">{quantity} K</span>
        <button
          className="text-xl font-bold bg-gray-700 px-3 py-1 rounded-lg"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      {/* Pricing Info */}
      <div className="bg-[#1A1A40] mt-4 p-4 rounded-lg text-gray-300">
        <p>
          <span className="font-bold text-white">Stock:</span> 1000K Gold
        </p>
        <p>
          <span className="font-bold text-white">Min. Purchase:</span> 1K Gold
        </p>
        <p>
          <span className="font-bold text-white">Unit Price:</span>{" "}
          {unitPrice.toFixed(6)} USD / K Gold
        </p>
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-yellow-400">TOTAL</p>
        <p className="text-xl font-bold text-yellow-500">{totalPrice} USD</p>
      </div>

      {/* Buy Now Button */}
      <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg w-full text-lg">
        BUY NOW
      </button>

      {/* Footer */}
      <div className="mt-4 text-gray-400 text-sm text-center">
        Offer ID #52667497 -{" "}
        <a href="#" className="text-fuchsia-500 hover:underline">
          Report this offer
        </a>
      </div>
    </div>
  );
};

export default SellerInfoCard;
