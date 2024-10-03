
import React from 'react';
import home from './assets/home.png';
import basket from './assets/basket.png';
import heart from './assets/heart.png';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar flex justify-between items-center bg-[#C8A1E0]">
      <div className="flex items-center cursor-pointer ">
          <img src={logo} alt="logo" className="w-52" />
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="mr-4" onClick={() => navigate('/Home')} >
            <img src={home} alt="home" className="home w-12 h-12" />
        </div>
        <div className="mr-4" onClick={() => navigate('/Wishlist')}>
            <img src={heart} alt="heart" className="heart w-12 h-12" />
        </div>
        <div className="mr-4 " onClick={() => navigate('/Cart')}>
            <img src={basket} alt="basket" className="basket w-12 h-12" />     
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

