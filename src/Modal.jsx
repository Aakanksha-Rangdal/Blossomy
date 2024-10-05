import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./cartRedux";
import { addItemToWishlist } from "./wishlistRedux";

const Modal = ({ title, description, image, price, open, onClose }) => {
  const [itemsCount, setItemsCount] = useState(1);
  // Redux implementation
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const removeItemsFromCart = () => {
    setItemsCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
  };
  const addItemsToCart = () => {
    setItemsCount((prev) => prev + 1);
  };

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close the modal if clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  const addToCart = () => {
    const cartData = {
      title: title,
      description: description,
      image: image,
      price: price,
      itemCount: itemsCount,
    };
    dispatch(addItemToCart(cartData));
  };
  const addToWishlist = () => {
    const cartData = {
      title: title,
      description: description,
      image: image,
      price: price,
    };
    dispatch(addItemToWishlist(cartData));
  };

  console.log(cart, "data in cart");
  console.log(wishlist, "data in wishlist");
  return (
    <>
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
          <div className="md:ml-6 w-full md:w-2/3 mt-4 md:mt-0">
            <div className="flex justify-between items-center mb-4">
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

            {/* Quantity and Add to Cart Buttons */}
            <div className="mt-6">
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={removeItemsFromCart}
                  className="border-2 px-3 py-1 rounded-lg text-lg"
                >
                  -
                </button>
                <span className="font-bold text-xl">{itemsCount}</span>
                <button
                  onClick={addItemsToCart}
                  className="border-2 px-3 py-1 rounded-lg text-lg"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                <button
                  onClick={addToCart}
                  className="w-full md:w-auto px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
                >
                  Add to Cart
                </button>
                <button
                  onClick={addToWishlist}
                  className="w-full md:w-auto px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300"
                >
                  Move to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
