import React from "react";
import product from "./assets/flower.webp";

const Modal = () => {
  const modalStyles = ['static', 'hidden']
  console.log(modalStyles.remove)
  return (
    <div className="static hidden ">
      {/* Overlay */}
      <div className="fixed m-0 p-0 h-screen w-screen bg-[#5b4b63] z-10 top-0 opacity-60"></div>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center">
        <div className="mx-auto bg-white flex items-center justify-center w-11/12 md:w-4/5 h-auto flex-col p-12 rounded-lg shadow-lg">
          {/* Product Container */}
          <div className="bg-white flex flex-col md:flex-row items-start p-4 rounded-lg">
            {/* Product Image */}
            <img src={product} className="w-full md:w-1/4 h-auto rounded-lg" />

            {/* Product Details */}
            <div className="md:ml-6 w-full md:w-3/4">
              {/* Product Name and Price */}
              <div className="flex justify-between items-center">
                <div className="font-bold text-2xl">Flowers</div>
                <div className="font-bold font-mono text-2xl text-red-700">
                  $35
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-600 mt-2">
                A beautiful bouquet of fresh flowers perfect for any occasion.
              </p>

              {/* Quantity and Add to Cart */}
              <div className="mt-4">
                <div className="flex justify-start items-center space-x-4 mb-4">
                  <button className="border-2 px-2">-</button>
                  <div className="font-bold font-mono text-xl text-red-700">
                    Quantity: 1
                  </div>
                  <button className="border-2 px-2">+</button>
                </div>
                <div className="flex">
                  <button className="w-full md:w-auto border-2 px-4 py-2 rounded bg-green-500 text-white font-bold font-mono text-lg">
                    Move to Wishlist
                  </button>
                  <button className="w-full md:w-auto border-2 px-4 py-2 rounded bg-green-500 text-white font-bold font-mono text-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
