import { useState } from "react";

const useInput = (validateValue, validateEmail) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const emailIsValid = validateEmail(enteredEmail);
  const emailHasError = !emailIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const emailBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredEmail("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    email: enteredEmail,
    isValid: valueIsValid,
    emailIsValid,
    hasError,
    emailHasError,
    valueChangeHandler,
    emailChangeHandler,
    inputBlurHandler,
    emailBlurHandler,
    reset,
  };
};

export default useInput;
