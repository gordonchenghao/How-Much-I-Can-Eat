import React from "react";

function RecipeInstruction(props) {
	return (
		<div className="recipe-instructions">
			<h1>Instructions</h1>
			{props.steps.map((step) => {
				return (
					<div key={step.number} className="recipe-step">
						<div className="recipe-step-number">{step.number}</div>
						{step.step}
					</div>
				);
			})}
		</div>
	);
}

export default RecipeInstruction;
