import { useState } from "react"

function App() {
  // used useState hook to change UI monupulations
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
        rounded-xl">
          // the button is click than automatically trigred function.
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 
          rounded-full text-white shdow-lg"
          style={{backgroundColor : "red"}}
          >red</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 
          rounded-full text-white shdow-lg"
          style={{backgroundColor : "olive"}}
          >olive</button>
          <button 
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 
          rounded-full text-white shdow-lg"
          style={{backgroundColor : "black"}}
          >black</button>
        </div>
      </div>
    </div>
  )
}

export default App
