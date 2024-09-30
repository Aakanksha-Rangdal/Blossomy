import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      hi
      <Navbar />
    </div>
    )
}

export default App
