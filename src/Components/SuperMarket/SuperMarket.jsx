import React, { useState } from 'react'
import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from "./DisplayProducts"
import Cart from "./Cart"

// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  
  
  const[cart,setCart]=useState([])
  const[productCategoty, setProductCategory]= useState('produce')
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategoty={productCategoty}/> 
      </section>

      Cart component here

    </div>
  )
}

export default SuperMarket