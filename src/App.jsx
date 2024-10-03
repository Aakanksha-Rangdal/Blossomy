import React, { useState } from "react"; // Import React and useState
import Navbar from "./Navbar";
import Box from "./Box";
import Modal from "./Modal";
import data from "../resources/inventory.json";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
// import Cart from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  console.log(data, "data");

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="/Home" element={<Home />} /> */}
          <Route
            path="/"
            element={
              <div className="grid grid-cols-4">
                {data.map((item) => {
                  return (
                    <Box
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
