import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// App component is export to the main.js
function App() {
  
  let [counter , setCounter]=useState(15)

  // let counter = 15;
``
  const addValue = () => {
    console.log("clicked" ,counter)
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>code with react</h1>
      <h2>Counter value =  : {counter}</h2>

      {/* addValue function available here */}
      <button onClick={addValue}>add value</button>   

      {/* removeValue function available here */}
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
