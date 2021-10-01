import { useState } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log("Entered name:", name);
    setName("");
  };

  const nameIsInvalid = !nameIsValid && nameTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
