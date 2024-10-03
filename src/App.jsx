import React, { useState } from "react"; // Import React and useState
import Navbar from "./Navbar";
import Box from "./Box";
import Modal from "./Modal";
import data from "../resources/inventory.json";
// import useToggle from "./hooks/useToggle";

function App() {
  const [count, setCount] = useState(0);
  // const { on, toggler } = useToggle();
  console.log(data, "data");

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4">
        {data.map((item) => {
          return <Box image={item.image} title={item.title} description={item.description} price={item.price} />;
        })}
        {/* <Box /> */}
      </div>
      {/* {on && <Modal toggler={toggler} />} */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
