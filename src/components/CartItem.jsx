import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateCartItem } from "../cartRedux";
import { addItemToWishlist } from "../wishlistRedux";

const CartItem = ({ title, description, image, price, quantity }) => {
  const [itemsCount, setItemsCount] = useState(quantity);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  };
  const addItemsToCart = () => {
    setItemsCount((prev) => prev + 1);
    dispatch(updateCartItem({ action: "add", title: title }));
  };
  const removeItemsFromCart = () => {
    setItemsCount((prev) => {
      if (prev > 1) {
        return prev - 1;
      } else {
        return 1;
      }
    });
    dispatch(updateCartItem({ action: "remove", title: title }));
  };
  const removeFromCart = () => {
    dispatch(removeItemFromCart(title));
  };
  const moveToWishlist = () => {
    const itemList = cart.data.filter(
      (item) => item.title.toLowerCase() == title.toLowerCase()
    );
    dispatch(removeItemFromCart(title));
    dispatch(addItemToWishlist(itemList[0]));
  };
  return (
    <div className="flex bg-[#ffffff] shadow-md rounded-xl p-4">
      <img src={image} alt={title} className="w-1/6 rounded-lg" />
      <div className="ml-4 flex flex-col justify-between">
        <div className="">
          <h2 className="text-3xl font-bold">{toTitleCase(title)}</h2>
          <p className="text-xl">{description} </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700 text-lg">${price}</p>
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
          <div
            onClick={moveToWishlist}
            className={
              "px-6 py-2 flex justify-center items-center cursor-pointer bg-orange-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
            }
          >
            Move to Wishlist
          </div>
          <div
            onClick={removeFromCart}
            className={
              "px-6 py-2 flex justify-center items-center cursor-pointer bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300"
            }
          >
            Remove from Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
