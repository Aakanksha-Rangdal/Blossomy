import React from 'react';
import home from './assets/home.png';
import basket from './assets/basket.png';
import heart from './assets/heart.png';
import logo from './assets/heart.png';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-end p-4 bg-[#C8A1E0]">
        <div classname="mr-4"><a href="/">
          <img src={home} alt="home" className="home w-12 h-12" /></a>
        </div>
        <div classname="mr-4"><a href="/basket">
        <img src={basket} alt="basket" className="basket w-12 h-12" /></a>
        </div>
        <div><a href="/" >
          <img src={heart} alt="heart" className="heart w-12 h-12" /></a>
        </div>
        <div><a href="/" >
          <img src={logo} alt="logo" className="logo w-12 h-12" /></a>
        </div>
    </nav>
  );
};

export default Navbar;
