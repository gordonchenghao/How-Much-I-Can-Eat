import React from "react";
import { useEffect } from "react";

function UserInput(props) {
	//Create diet selection interface
	useEffect(() => {
		const dietChoices = document.querySelectorAll(".diet-choice");
		dietChoices.forEach((choice) => {
			choice.addEventListener("click", () => {
				dietChoices.forEach((choice) => {
					choice.classList.remove("diet-choice-active");
				});
				choice.classList.toggle("diet-choice-active");
			});
		});
	});

	return (
		<section className="user-input">
			<div className="diet-list">
				<div
					className="diet-choice diet-choice-active"
					onClick={(e) => props.setDiet("Anything")}
				>
					<div className="diet-icon">🥪</div>Anything
				</div>
				<div className="diet-choice" onClick={(e) => props.setDiet("paleo")}>
					<div className="diet-icon">🍖</div>Paleo
				</div>
				<div
					className="diet-choice"
					onClick={(e) => props.setDiet("vegetarian")}
				>
					<div className="diet-icon">🥗</div>Vegetarian
				</div>
				<div className="diet-choice" onClick={(e) => props.setDiet("vegan")}>
					<div className="diet-icon">🥦</div>Vegan
				</div>
				<div
					className="diet-choice"
					onClick={(e) => props.setDiet("ketogenic")}
				>
					<div className="diet-icon">🥙</div>Ketogenic
				</div>
				<div
					className="diet-choice"
					onClick={(e) => props.setDiet("gluten free")}
				>
					<div className="diet-icon">🌾</div>Gluten Free
				</div>
			</div>
			<div className="calories-entry">
				<label>I want to eat</label>
				<input
					placeholder="1500"
					value={props.targetCalories}
					onChange={(e) => {
						props.setTargetCalories(e.target.value);
					}}
				/>
				{/* Use inline style to add "Calories" Unit */}
				<span style={{ marginLeft: "-85px", fontSize: "1.2rem" }}>
					Calories
				</span>
			</div>
			<button onClick={props.searchMeal}>Get Daily Meal Plan</button>
		</section>
	);
}

export default UserInput;
