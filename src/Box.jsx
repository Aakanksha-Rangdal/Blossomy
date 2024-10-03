import React from "react";
import product from "./assets/flower.webp";
import Modal from "./Modal";

const box = ({ toggler }) => {
  return (
    <div className="flex flex-wrap justify-center gap-16 cursor-pointer">
      <Modal />
      <div className="flex items-center bg-[#e4ccf3] shadow-md rounded-lg p-4 mt-4 w-72 l-72">
        <img src={product} className="w-1/2 h-auto rounded-lg" />
        <div className="ml-4">
          <h2 className="text-lg font-bold">Flower</h2>
          <p className="text-gray-700">Flowers</p>
        </div>
      </div>
      </div>
  );
};

export default box;
