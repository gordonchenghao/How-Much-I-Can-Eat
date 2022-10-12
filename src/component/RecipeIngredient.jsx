import React from "react";

function RecipeIngredient(props) {
	return (
		<div className="recipe-ingredients">
			<h1>Ingredients</h1>
			<div className="ingredient-list">
				{props.recipe.extendedIngredients.map((ingredient,idx) => {
					return (
						<div key={idx} className="ingredient-details">
							<div>
								{Math.round(ingredient.amount * 100) / 100 +
									" " +
									ingredient.unit}
							</div>
							<div className="ingredient-image">
								<img
									src={
										"https://spoonacular.com/cdn/ingredients_100x100/" +
										ingredient.image
									}
								/>
							</div>
							<div>{ingredient.nameClean}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default RecipeIngredient;
