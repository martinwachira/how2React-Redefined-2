import { useState } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const emailIsValid =
    email.includes("@") && email.includes(".") && email.trim() !== "";
  const nameIsInvalid = !nameIsValid && inputTouched;
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

 const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setInputTouched(true);
    setEmailTouched(true);

    if (!nameIsValid && !emailIsValid) {
      return;
    }

    setName("");
    setEmail("");
    setInputTouched(false);
    setEmailTouched(false);
  };

  const inputClasses =
    nameIsInvalid && emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={inputBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameIsInvalid && <p className="error-text">Name Mustn't be Empty</p>}
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
