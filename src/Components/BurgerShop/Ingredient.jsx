import React from "react"

const Ingredient = (props) => {
	return (
		<li style={{background: props.color}}>
			{props.name}
			{
				props.isList ?
				<button onClick={() => props.addToBurger(props.ingredient)}>+</button>
				:
				<button onClick={() => props.removeFromBurger(props.idx)}>X</button>
			}
			
			
		</li>
	)
}

export default Ingredient