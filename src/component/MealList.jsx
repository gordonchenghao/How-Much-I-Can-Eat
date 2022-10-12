import React from "react";
import Meal from "./Meal";

function MealList(props) {

    if (!props.mealData){
        return 
    } else {
        return (
            <section className="daily-meal-plan">
            <h1>Today's Meal Plan</h1>
                <div className="meal-list">
                    {props.mealData.meals.map((meal,idx) => {
                        return (
                            <Meal
                                key={idx}
                                idx={idx}
                                meal={meal}
                                recipe={props.recipe}
                                setRecipe={props.setRecipe}
                                recipeList={props.recipeList}
                                setRecipeList={props.setRecipeList}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
	
}

export default MealList;
