import React from 'react'
import Product from './Product'


const DisplayProducts = (props) => {
  console.log(props)
  return (
    <div className="product-list">
    {props.products.map((ele,idx)=>(
      <Product
      name={ele.name}
      key={idx}
      price={ele.price}
      thumb={ele.image}

      />
      
    ))}
    </div>
  )
}

export default DisplayProducts
// {categories.map((category, idx) => (
//   <option key={idx} value={category}>
//     {category}
//   </option>
// ))}