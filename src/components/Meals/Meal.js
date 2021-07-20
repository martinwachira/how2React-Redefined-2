import React from "react";
import classes from "./Meal.module.css";

const Meal = (props) => {
  return (
    <>
      <card>
        <ul>
          <li>{props.name}</li>
          <li>{props.price}</li>
          <li>{props.description}</li>
        </ul>
      </card>
    </>
  );
};

export default Meal;
