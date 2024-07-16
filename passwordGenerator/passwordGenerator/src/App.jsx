import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [length , setLength]=useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  const[password , setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "zxcvbnmasdfghjklqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM"
  },[length,numberAllowed,charAllowed,setPassword]);

  if(numberAllowed){ str += "1234567890" }
  if(charAllowed){ str += "!@#$%^&*()" }

  for(let i=1;i<=array.length;i++){
    let char = Math.floor(Math.random() * str.lenght + 1)
    pass += str.CharAt(char);
  }
  setPassword(pass);

  return (
    <>
      <h1>pushkaraj</h1>
    </>
  )
}

export default App
