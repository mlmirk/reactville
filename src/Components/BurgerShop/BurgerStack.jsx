import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = ({stack, removeFromBurger}) => {
  const stackList = stack.map((ele, idx) => {
    return (
      <Ingredient 
        ingredient={ele}
        idx={idx}
        key={idx}
        removeFromBurger={removeFromBurger}
      />
    )
  })

  return (
    <ul className="burger-stack">
      {stackList}
    </ul>
  )
}

export default BurgerStack