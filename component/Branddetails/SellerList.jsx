import React from 'react'

function SellerList() {
    const promotedSeller = {
        name: 'boostroom',
        orderSuccessScore: '100%',
        deliveryMethod: 'Delivery',
        deliverySpeed: '1 H',
        stock: '1000 K',
        minPurchase: '10 K',
        unitPrice: '0.03361 USD / K Gold',
      };
    
      const sellers = [
        {
          name: 'boostroom',
          orderSuccessScore: '75%',
          deliveryMethod: 'Delivery',
          deliverySpeed: '1 H',
          stock: '1000 K',
          minPurchase: '10 K',
          unitPrice: '0.03361 USD / K Gold',
        },
        {
          name: 'boostroom',
          orderSuccessScore: '25%',
          deliveryMethod: 'Delivery',
          deliverySpeed: '1 H',
          stock: '1000 K',
          minPurchase: '10 K',
          unitPrice: '0.03361 USD / K Gold',
        },
      ];
  return (
    <>
     <div className="bg-gray-900 text-white p-4 md:p-6 rounded-lg shadow-lg">
      {/* Promoted Seller Section */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white mb-2">Promoted Seller</h2>
        <div className="bg-dark-500 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="image/cardicon.jpg"
              alt="Seller Icon"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-lg font-semibold">{promotedSeller.name}</p>
              <p className="text-sm text-green-400">
                👍 {promotedSeller.orderSuccessScore} Order Success Score
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center w-full md:w-auto">
            <div>
              <p className="text-sm text-gray-400">Delivery Method</p>
              <p className="font-semibold">{promotedSeller.deliveryMethod}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Delivery Speed</p>
              <p className="font-semibold">{promotedSeller.deliverySpeed}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Stock (K)</p>
              <p className="font-semibold">{promotedSeller.stock}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Min. Purchase (K)</p>
              <p className="font-semibold">{promotedSeller.minPurchase}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Unit Price (K)</p>
              <p className="font-semibold text-yellow-400">{promotedSeller.unitPrice}</p>
            </div>
          </div>
        </div>
      </div>

      {/* All Sellers Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Sellers (125)</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <span className="text-sm">Online Sellers</span>
              <input type="checkbox" className="form-checkbox text-yellow-500" />
            </label>
            <button className="text-sm">Recommended</button>
          </div>
        </div>

        {/* Seller List */}
        {sellers.map((seller, index) => (
          <div
            key={index}
            className="bg-dark-500 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between mb-4"
          >
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="image/cardicon.jpg"
                alt="Seller Icon"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-lg font-semibold">{seller.name}</p>
                <p className="text-sm text-green-400">
                  👍 {seller.orderSuccessScore} Order Success Score
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center w-full md:w-auto">
              <div>
                <p className="text-sm text-gray-400">Delivery Method</p>
                <p className="font-semibold">{seller.deliveryMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Delivery Speed</p>
                <p className="font-semibold">{seller.deliverySpeed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Stock (K)</p>
                <p className="font-semibold">{seller.stock}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Min. Purchase (K)</p>
                <p className="font-semibold">{seller.minPurchase}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Unit Price (K)</p>
                <p className="font-semibold text-yellow-400">{seller.unitPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
    </>
  )
}

export default SellerList
