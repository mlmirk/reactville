import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Supermarket from './Components/SuperMarket/SuperMarket'


const App = () => {
  const[cash,setCash]=useState(100)
  
  const handleExchange = (amt) => {
      if (cash - amt > 0){setCash((cash - amt).toFixed(2)) 
      return true
      }else {return false}
    }

  




  return (
  
    <main>
  <Nav cash={cash}/>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/burgers" element={<BurgerShop/>}/>
    <Route path="/market" element={<Supermarket handleExchange={handleExchange} setCash={setCash}/>}/>
  </Routes>
    </main>
  )
}

export default App

