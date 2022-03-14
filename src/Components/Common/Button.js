import React from "react";
import classes from "./Button.module.css";

const Button = ({ label }) => {
  return (
    <div>
      <button data-testid="btn" className={classes.button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
