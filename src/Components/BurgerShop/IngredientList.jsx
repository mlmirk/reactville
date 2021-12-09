import React from "react"

import Ingredient from './Ingredient'

const IngredientList = ({ingredients, addToBurger}) => {	
	const iList = ingredients.map((ele, idx) => {
		return (
			<Ingredient 
				ingredient={ele}
				idx={idx}
				key={idx}
				isList={true}
				addToBurger={addToBurger}
			/>
		)
	})

	return (
		<ul>
			{iList}
		</ul>
	)
}

export default IngredientList