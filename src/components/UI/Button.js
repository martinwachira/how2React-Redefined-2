import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button type="submit" className={classes.button}>
        Add User
      </button>
    </div>
  );
};

export default Button;
