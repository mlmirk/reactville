import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'

// Components
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Supermarket from './Components/SuperMarket/SuperMarket'


const App = () => {
  const[cash,Setcash]=useState(100)
  
  function handleExchange(amt){
    
  }





  return (
  
    <main>
  <Nav cash={cash}/>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/burgers" element={<BurgerShop/>}/>
    <Route path="/market" element={<Supermarket/>}/>
  </Routes>
    </main>
  )
}

export default App

