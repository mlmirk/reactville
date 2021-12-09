import React from "react"

const Ingredient = (props) => {
	return (
		<li style={{background: props.ingredient.color}}>
			<p>{props.ingredient.name}</p>
			{!props.isList ? 
			<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
			:
			<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
			}
		</li>
	)
}

export default Ingredient