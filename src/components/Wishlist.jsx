import React from "react";
import { useSelector } from "react-redux";
import Box from "./Box";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist.data);
  return (
    <div className="bg-[#F7F9FC] min-h-screen px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
        Wishlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.data.map((item, index) => (
          <Box
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

export default Wishlist;
