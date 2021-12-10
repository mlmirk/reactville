import React from 'react'
import Product from './Product'


const DisplayProducts = (props) => {
  console.log(props)
  const selProducts = props.products.map((ele,idx)=>{
    return( ele.category === props.productCategory &&
<Product
      product={ele}
      key={idx}
      addToCart={props.addToCart}
/>

    )
})
return (
  <div className="product-list">
    {selProducts}
  </div>
)
}

export default DisplayProducts
// {categories.map((category, idx) => (
//   <option key={idx} value={category}>
//     {category}
//   </option>
// ))}
