import React, { useState } from 'react'; // Import React and useState
import Navbar from './Navbar';
import Box from './Box';
import Modal from './Modal';
// import useToggle from "./hooks/useToggle";

function App() {
  const [count, setCount] = useState(0);
  // const { on, toggler } = useToggle();

  return (
    <div>
      <Navbar />
      <div className="flex justify-start">
        <Box />
      </div>
      {/* {on && <Modal toggler={toggler} />} */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
