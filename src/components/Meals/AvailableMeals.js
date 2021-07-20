import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Roasted Chicken",
    description: "A kenyan grilled chicken!",
    price: 45.45,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Mexican Taco",
    description: "Spicy and Sweet",
    price: 23.59,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <>
      <section className={classes.meals}>
        <ul>{meals}</ul>
      </section>
    </>
  );
};

export default AvailableMeals;
