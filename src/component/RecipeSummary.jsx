import React from "react";

function RecipeSummary(props) {
	return (
		<div className="recipe-summary">
			<h1>{props.recipe.title}</h1>
			<img src={props.recipe.image} />
			<div className="recipe-features">
				<div className="feature">
					<div>💰</div>${Math.round(props.recipe.pricePerServing) / 100} per
					serving
				</div>
				<div className="feature">
					<div>⏱</div>Ready in {props.recipe.readyInMinutes} minutes
				</div>
				<div className="feature">
					<div>🍎</div>Health score: {props.recipe.healthScore}
				</div>
			</div>
			<div id="summary"></div>
		</div>
	);
}

export default RecipeSummary;
