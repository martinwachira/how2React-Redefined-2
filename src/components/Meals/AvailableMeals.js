import { useCallback, useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React from "react";
import classes from "./AvailableMeals.module.css";
import { getMeals } from "../../api/MealsApi";

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
    price: 23.5,
  },
  {
    id: "m6",
    name: "Chicken Biryani",
    description: "Swahili made Biryani",
    price: 43.15,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    getMeals().then((response) => {
      const loadedMeals = [];

      for (const key in response) {
        loadedMeals.push({
          id: key,
          meal: response[key].meal,
          description: response[key].description,
          price: response[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
      console.log("loaded meals", loadedMeals);
    });
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const AllMeals = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{isLoading ? "Loading..." : <ul>{AllMeals}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
