import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameTouched;

  useEffect(() => {
    if (nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid]);

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    setName("");
    setNameTouched(false);
  };

  const inputClasses = nameIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={nameInputBlurHandler}
          onChange={nameInputHandler}
        />
      </div>
      {nameIsInvalid && <p className="error-text">Name Mustn't be Empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
