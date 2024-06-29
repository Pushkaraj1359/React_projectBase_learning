import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({details}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="" src="https://tse1.mm.bing.net/th?id=OIP.GPFEY6kfgxbsja6gmrW6rwAAAA&pid=Api&rs=1&c=1&qlt=95&w=149&h=99" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {details.detial}
      </p> 
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {details.age}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {details.profession}
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
