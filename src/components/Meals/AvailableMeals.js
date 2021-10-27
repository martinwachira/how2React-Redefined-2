import { useCallback, useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React from "react";
import classes from "./AvailableMeals.module.css";
import { getMeals } from "../../api/MealsApi";

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
      console.log("loaded meals", loadedMeals);
      setMeals(loadedMeals);
      setIsLoading(false);
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
    <>
      <section className={classes.meals}>
        <Card>{isLoading ? "Loading..." : <ul>{AllMeals}</ul>}</Card>
      </section>
    </>
  );
};

export default AvailableMeals;
