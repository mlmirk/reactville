import React, { useState } from 'react'
import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from "./DisplayProducts"
import Cart from "./Cart"

// Components & Data
import { products } from '../../data/market-data'



const SuperMarket = () => {
  
  const[cart,setCart]=useState([])
  const[productCategory, setProductCategory]= useState('Produce')
  console.log(productCategory)

  const addToCart = (item) => {
    console.log("this is item" ,item)
    if (cart.find(prod => prod.id === item.id)) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod))
    } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
    }
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...item, quantity: item.quantity - 1 } : prod))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }



  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}
        />
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart}/> 
      </section>

      <Cart 
      cart={cart}
      removeFromCart={removeFromCart}
      setCart={setCart}/>

    </div>
  )
}

export default SuperMarket