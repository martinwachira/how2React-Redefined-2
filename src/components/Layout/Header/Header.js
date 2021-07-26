import React from "react";
import mealsImg from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>How2-React Meals App 🍝</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="some delicious food" />
      </div>
    </>
  );
};

export default Header;
