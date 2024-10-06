import React from "react";
import home from "/src/assets/home.png";
import basket from "/src/assets/basket.png";
import heart from "/src/assets/heart.png";
import logo from "/src/assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar flex justify-between items-center bg-[#F3F4F6] shadow-md p-4">
      {/* Logo Section */}
      <div
        onClick={() => navigate("/Home")}
        className="flex cursor-pointer items-center "
      >
        <img src={logo} alt="logo" className="w-48" />
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center space-x-6 cursor-pointer ">
        {/* Home Icon */}
        <div
          onClick={() => navigate("/Home")}
          className="relative group hover:scale-105 transition-transform duration-200"
        >
          <img src={home} alt="home" className="w-10 h-10" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Home
          </span>
        </div>
        {/* Wishlist Icon */}
        <div
          onClick={() => navigate("/Wishlist")}
          className="relative group hover:scale-105 transition-transform duration-200"
        >
          <img src={heart} alt="wishlist" className="w-10 h-10" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Wishlist
          </span>
        </div>
        {/* Cart Icon */}
        <div
          onClick={() => navigate("/Cart")}
          className="relative group hover:scale-105 transition-transform duration-200"
        >
          <img src={basket} alt="cart" className="w-10 h-10" />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Cart
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
