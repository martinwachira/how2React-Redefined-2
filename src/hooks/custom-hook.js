import { useReducer } from "react";

const initState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initState;
};

const useCustom = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initState);

  const isValid = validateValue(inputState.value);
  const inputHasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid: isValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useCustom;
