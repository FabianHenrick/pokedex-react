import { useState } from 'react'
import './App.css'
import  Navbar from '../../../components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
    </div>
  )
}

export default App
