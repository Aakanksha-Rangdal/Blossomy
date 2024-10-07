import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.data.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotalPrice((prev) => total.toFixed(2));
  }, [cart]);
  return (
    <div className="bg-[#F7F9FC] min-h-screen px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Shopping Cart
      </h1>
      <div className="flex flex-col gap-4">
        {cart.data.map((item, index) => {
          return (
            <CartItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className="my-10 flex justify-end">
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-semibold text-gray-700">
            Total: ${cartTotalPrice}
          </div>
          <div
            onClick={() => {
              alert("Checkout Coming Soon...");
            }}
            className="flex items-center max-w-40 text-xl cursor-pointer text-white rounded-xl justify-center p-5 bg-blue-500 hover:bg-blue-600"
          >
            <p>Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
