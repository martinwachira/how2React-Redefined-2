import HeaderCartButton from "./HeaderCartButton";
import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";

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
