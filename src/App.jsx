import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
  <h1 className="bg-green-400"> this is going to GIThub </h1>    
  <h1 className="bg-green-400 text-white"> giithub </h1>  
  <input type="text" className="border-2 border-gray-300 rounded-md p-2" placeholder="Enter text here" />  
    </>
  )
}

export default App
