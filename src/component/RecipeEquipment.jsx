import React from "react";

function RecipeEquipment(props) {
	return (
		<div className="recipe-equipment">
			<h1>Equipment</h1>

			<div className="equipment-list">
				{props.uniqueEquipmentList.map((equipment,idx) => (
					<div key={idx} className="equipment-details">
						<div className="equipment-image">
							<img
								src={
									"https://spoonacular.com/cdn/equipment_100x100/" +
									equipment.image
								}
							/>
						</div>
						<div>{equipment.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default RecipeEquipment;
