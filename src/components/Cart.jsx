import React from "react";
import { useSelector } from "react-redux";
import Box from "./Box";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.data);
  return (
    <div className="bg-[#F7F9FC] min-h-screen px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Shopping Cart
      </h1>
      <div className="">
        {cart.data.map((item, index) => (
          <CartItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
