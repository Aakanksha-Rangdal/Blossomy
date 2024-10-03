import React, { useState } from "react";
import product from "./assets/flower.webp";
import Modal from "./Modal";

const box = ({ title, description, image, price }) => {
  const [modalToggler, setModalToggler] = useState(false);
  const openModal = () => {
    setModalToggler((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={openModal}
        className="relative flex flex-wrap justify-center gap-16 cursor-pointer"
      >
        <div className="flex items-center bg-[#e4ccf3] shadow-md rounded-lg p-4 mt-4 w-72 l-72">
          <img src={product} className="w-1/2 h-auto rounded-lg" />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-700">{price}</p>
          </div>
        </div>
        <Modal
          image={image}
          title={title}
          description={description}
          price={price}
          open={modalToggler}
        />
      </div>
    </>
  );
};

export default box;
