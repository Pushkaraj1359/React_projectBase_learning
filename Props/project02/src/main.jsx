import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let myobj ={
name : "pushkaraj",
profession : "engineering",
age : 21,
detial : "i have an wonderfull family my family is joint and happy family"
}

let student = {
  name : "pushu",
  profession : "teacher",
  age: 22,
  detial : "i have an wonderfull family my family is joint and happy family"
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App details ={myobj} />    
    <App details ={student} />    
  </React.StrictMode>,
)
