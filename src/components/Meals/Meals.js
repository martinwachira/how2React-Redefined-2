import AddMeal from "./AddMeal";
// import AddMeal from "./AddMeal";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

const Meals = () => {
  return (
    <>
      <AddMeal />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
