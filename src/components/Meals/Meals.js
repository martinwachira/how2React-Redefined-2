import AddMeal from "./AddMeal";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

const Meals = () => {
  return (
    <>
      <div style={{ margin: "3%" }}>
        <AddMeal />
      </div>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
