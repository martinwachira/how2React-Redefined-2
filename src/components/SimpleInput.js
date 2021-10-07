import useInput from "./../hooks/use-input";
import { useState } from "react";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim("") !== "");

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid =
    email.includes("@") && email.includes(".") && email.trim() !== "";
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setEmailTouched(true);

    if (!nameIsValid) {
      return;
    }

    resetName();
    setEmail("");
    setEmailTouched(false);
  };

  const inputClasses = nameHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameHasError && <p className="error-text">Name Mustn't be Empty</p>}
      </div>
      <div className={inputClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailIsInvalid && <p className="error-text">Incorrect email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
