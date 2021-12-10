import React from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  
  const total = (props.cart.reduce((sum, item) => {
    return (item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price)
  }, 0).toFixed(2))


console.log(total)
  return (
    <div className="cart">
      <h3>Cart</h3>
      

      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      ))}

      <div className="cart-total">
        <p>Total:{total}</p>
        <p>$</p>
      </div>
      <button >CHECKOUT</button>
      <button onClick={()=>{props.setCart([])}}>CLEAR CART</button>
    </div>
  )
}

export default Cart