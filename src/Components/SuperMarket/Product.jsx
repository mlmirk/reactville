import React from 'react'

const Product = (props) => {
  return (
    <div className="product-card">
      <img src={props.thumb} alt="product icon" />
      <section>
        <span>
          <p id="product-name">{props.name}</p>
          <p id="product-price">${props.price}</p>
        </span>
        <button>ADD TO CART</button>
      </section>
    </div>
  )
}

export default Product