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

  // const fetchMeals = () => {
  getMeals().then((response) => {
    console.log("response", response);
  });
  // };

  // const fetchMealsHandler = useCallback(async () => {
  //   setIsLoading(true);

  //     const loadedMeals = [];

  //     for (const key in data) {
  //       loadedMeals.push({
  //         id: key,
  //         title: data[key].title,
  //         openingText: data[key].openingText,
  //         releaseDate: data[key].releaseDate,
  //       });
  //     }

  //     setMeals(loadedMovies)
  //   }
  //   setIsLoading(false)
  // }, []);

  const AllMeals = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{AllMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
