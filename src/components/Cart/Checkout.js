import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street" placeholder="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" placeholder="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="phone" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm Order</button>
    </form>
  );
};

export default Checkout;
