import React, { useState } from 'react'
import '../../styles/burger.css'
import IngredientList from './IngredientList'
import BurgerStack from './BurgerStack'

import { ingredients } from '../../data/burger-data'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    console.log(ingredient);
    setStack ([ingredient, ...stack ])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((_, i) => i !== idx))
  }


function clearOrder(ingredient){
  setStack([])
}


  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList ingredients={ingredients} addToBurger={addToBurger}/>
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}

export default BurgerShop