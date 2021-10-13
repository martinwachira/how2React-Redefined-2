import { useState } from "react";

const useCustom = (validateValue) => {
  const [input, setInput] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isValid = validateValue(input);
  const inputHasError = !isValid && isInputTouched;

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const resetInput = () => {
    setInput("");
    setIsInputTouched(false);
  };

  return {
    value: input,
    valueIsValid: isValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useCustom;
