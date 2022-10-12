import React, { useEffect } from "react";

function Meal(props) {
	const [mealImgUrl, setMealImgUrl] = React.useState("");

    //fetch recipe details for each meal
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch(
			`https://api.spoonacular.com/recipes/${props.meal.id}/information?apiKey=f4af68e2e4cf43509c222bb9d9f146e8`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				props.setRecipeList((prev) => {
					prev[props.idx] = response;
					return [...prev];
				});
				setMealImgUrl(response.image)//use Hook to give img src url
			})
			.catch((err) => console.error(err));
	}, [props.meal]);


	return (
		<div className="meal-details">
			<h1>{props.meal.title}</h1>
			<img src={mealImgUrl} />
			<p>Preparation time: {props.meal.readyInMinutes}min</p>
			<p>Number of serving: {props.meal.servings}</p>

            {/* use form and input to create an HTML button that acts like a link*/}
			<form action="#recipe" method="GET">
				<input type="submit" value="See Recipe" onClick={()=>props.setRecipe(props.recipeList[props.idx])} />
			</form>
		</div>
	);
}

export default Meal;
