import React from "react";
import mealsImg from "../../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>How2-React Meals App 🍝</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="some delicious food" />
      </div>
    </>
  );
};

export default Header;
