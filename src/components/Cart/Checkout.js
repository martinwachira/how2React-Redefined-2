import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streeInputRef = useRef();
  const postalnputRef = useRef();
  const cityInputRef = useRef();

  const isNotEmpty = (value) => value.trim() !== "";
  const isLongEnough = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streeInputRef.current.value;
    const enteredPostal = postalnputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = isNotEmpty(enteredName);
    const streetIsValid = isNotEmpty(enteredStreet);
    const cityIsValid = isNotEmpty(enteredCity);
    const postalIsValid = isLongEnough(enteredPostal);

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      //throw some error
      return;
    }

    //submit data
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalnputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
