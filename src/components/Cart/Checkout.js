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
  const isLongEnough = (value) => value.trim().length >= 5;

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

    setInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      //throw some error

      return;
    }

    //submit data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  const nameClasses = `${classes.control} ${
    inputValidity.name ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    inputValidity.street ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    inputValidity.city ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    inputValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!inputValidity.name && <p>please enter a valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streeInputRef} />
        {!inputValidity.street && <p>please enter a valid street</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalnputRef} />
        {!inputValidity.postal && (
          <p>please enter a valid postal code(min 5 chars long)</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!inputValidity.city && <p>please enter a valid city</p>}
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
