import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <card className={classes.card}>{props.children}</card>
    </>
  );
};

export default Card;
