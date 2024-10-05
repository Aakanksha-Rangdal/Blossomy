import React from "react";
import product from "./assets/flower.webp";

const Modal = ({ title, description, image, price, open }) => {
  var modalStyles = ["static", "hidden"];
  const showModal = (show) => {
    if (show) {
      modalStyles = modalStyles.filter((style) => style != "hidden");
    } else {
      modalStyles.push("hidden");
    }
    return modalStyles;
  };
  return (
    <div className={showModal(open).join(" ")}>
      {/* Overlay */}
      <div
        id="modal-overlay"
        className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick} // Close modal on clicking outside the content
      ></div>

      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-300 ease-in-out ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div
          className="bg-white flex flex-col md:flex-row items-start p-6 md:p-12 w-11/12 md:w-4/5 max-w-4xl h-auto rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Product Image */}
          <img
            src={image}
            alt={title}
            className="w-full md:w-1/3 h-auto rounded-lg object-cover"
          />

            {/* Product Details */}
            <div className="md:ml-6 w-full md:w-3/4">
              {/* Product Name and Price */}
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <span className="text-2xl font-semibold text-pink-600">
                {price}
              </span>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
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
