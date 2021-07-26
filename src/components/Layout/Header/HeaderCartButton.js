import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

const HeaderCartButton = () => {
  const handleModalOpen = () => {
    alert("Opening Modal");
  };
  return (
    <button className={classes.button} onClick={handleModalOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Order</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default HeaderCartButton;
