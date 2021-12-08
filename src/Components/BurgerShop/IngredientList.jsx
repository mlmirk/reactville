import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = ({ingredients}) => {
	const iList= ingredients.map((ele, idx)=>{
		return(<Ingredient
    name={ele.name}
    color={ele.color}
		type={ele.type}
    key={idx}
		isList={true}
		
    />)
	})
	
	return (

		<ul>
			
			{iList}
		</ul>
	)
}

export default IngredientList