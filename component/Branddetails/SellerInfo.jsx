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
    <>
    <div className="p-4 rounded-lg relative h-48 bg-cover bg-center sm:h-56 "
  style={{ backgroundImage: "url('/image/sellerinfo-bg.png')" }}>
  <div className="flex justify-between items-center flex-wrap">
    <h2 className="text-lg font-bold text-fuchsia-500 sm:text-xl">Seller Information</h2>
    <span className="text-red-500 text-sm sm:text-base">🚀 Promoted Seller</span>
  </div>
  <div className="flex items-center gap-3 mt-3 flex-wrap">
    <img
      src="/image/cardicon.jpg"
      alt="Seller Avatar"
      className="w-16 h-16 rounded-sm sm:w-20 sm:h-20"
    />
    <div className="flex flex-col">
      <p className="text-xl font-bold flex items-center sm:text-2xl">
        boostroom <span className="text-blue-500 ml-1">✔️</span>
      </p>
      <p className="text-green-400 text-sm sm:text-base">100% Order Success Score</p>
      <button className="mt-3 text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-sm px-2 w-full sm:w-48">
        CONTACT SELLER
      </button>
    </div>
  </div>
</div>
    <div className="bg-dark-500 mt-4 text-white p-6 shadow-sm rounded-lg w-full max-w-md mx-auto">
      {/* Seller Information */}

      {/* Quantity Selector */}
      <div className="bg-dark-100 mt-4 p-4 rounded-lg flex justify-between items-center">
        <button
          className="text-xl text-yellow-400 font-bold bg-gray-700 border border-yellow-400 px-3 py-1 rounded-sm"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="text-lg font-bold ">{quantity}  K</span>
        <button
          className="text-xl text-yellow-400 font-bold bg-gray-700 border border-yellow-400 px-3 py-1 rounded-sm"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>

      {/* Pricing Info */}
      <div className="bg-dark-500 mt-4 p-4 rounded-lg text-gray-300">
  <div className="grid grid-cols-2 gap-4">
    <span className="font-bold text-muted">Stock:</span>
    <span>1000K Gold</span>
    
    <span className="font-bold text-muted">Min. Purchase:</span>
    <span>1K Gold</span>
    
    <span className="font-bold text-muted">Unit Price:</span>
    <span>{unitPrice.toFixed(6)} USD / K Gold</span>
  </div>
</div>


      {/* Total Price */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-white">TOTAL</p>
        <p className="text-xl font-bold text-yellow-500">{totalPrice} USD</p>
      </div>

      {/* Buy Now Button */}
      <button className="my-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-sm w-full text-lg">
        BUY NOW
      </button>

      {/* Footer */}
    </div>
      <div className="bg-dark-500 mt-4 text-gray-400 text-sm text-center p-4">
        Offer ID #52667497 -{" "}
        <a href="#" className="text-fuchsia-500 hover:underline">
          Report this offer
        </a>
      </div>

    </>
  );
};

export default SellerInfoCard;
