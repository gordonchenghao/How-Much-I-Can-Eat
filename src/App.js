import React from "react";
import { useEffect } from "react";
import Intro from "./component/Intro";
import UserInput from "./component/UserInput";
import MealList from "./component/MealList";
import Recipe from "./component/Recipe";

function App() {
  const [diet, setDiet] = React.useState("");
	const [targetCalories, setTargetCalories] = React.useState("");
	const [mealData, setMealData] = React.useState("");
  const [recipeList, setRecipeList] = React.useState([]);
	const [recipe, setRecipe] = React.useState("");
	
	function searchMeal() {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		fetch(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=f4af68e2e4cf43509c222bb9d9f146e8&targetCalories=${
				targetCalories ? targetCalories : 1500
			}&timeFrame=day&diet=${diet}`,
			options
		)
			.then((response) => response.json())
			.then((response) => {
				setMealData(response);
				setRecipeList([]);
			})
			.catch((err) => console.error(err));
	}

	return (
		<div>
			<div className="header">How Much Can I Eat?</div>
			<Intro />
			<UserInput
				setDiet={setDiet}
				targetCalories={targetCalories}
				setTargetCalories={setTargetCalories}
				searchMeal={searchMeal}
			/>
			<MealList
				mealData={mealData}
				recipe={recipe}
				setRecipe={setRecipe}
				recipeList={recipeList}
				setRecipeList={setRecipeList}
			/>
			<Recipe recipe={recipe} />
		</div>
	);
}

export default App;
