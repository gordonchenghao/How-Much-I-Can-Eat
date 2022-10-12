import React, { useEffect } from "react";
import RecipeSummary from "./RecipeSummary";
import RecipeIngredient from "./RecipeIngredient";
import RecipeEquipment from "./RecipeEquipment";
import RecipeInstruction from "./RecipeInstruction";

function Recipe(props) {

    //use useEffect to set innerHTML for div#summary
	useEffect(() => {
		if (props.recipe) {
			document.getElementById("summary").innerHTML = props.recipe.summary;
		}
	});

    //only generate recipe when a recipe is selected
	if (!props.recipe) {
		return;
	} else {
		const [{ name, steps }] = props.recipe.analyzedInstructions;

        //generate an array contain distinct equipment
		let equipmentList = [];
		steps.forEach((step) => {
			step.equipment.forEach((equipment) => {
				equipmentList.push(equipment);
			});
		});
		const uniqueEquipmentList = [
			...new Map(equipmentList.map((item) => [item[`id`], item])).values(),
		];

		return (
			<section className="recipe" id="recipe">
                <RecipeSummary recipe={props.recipe}/>
                <RecipeIngredient recipe={props.recipe}/>
                <RecipeEquipment recipe={props.recipe} uniqueEquipmentList={uniqueEquipmentList}/>
                <RecipeInstruction steps={steps}/>
			</section>
		);
	}
}

export default Recipe;
