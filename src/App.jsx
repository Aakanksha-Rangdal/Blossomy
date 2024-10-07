import React, { useState } from "react"; // Import React and useState
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import Modal from "./components/Modal";
import data from "../resources/inventory.json";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
