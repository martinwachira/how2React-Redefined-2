import AddMeal from "./AddMeal";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

// import AddMeal from "./AddMeal";




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
