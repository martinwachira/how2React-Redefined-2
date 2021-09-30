import { useState } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log("Entered name:", name);
    setName("");
  };

  const inputClasses = nameIsValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} onChange={nameInputHandler} />
      </div>
      {!nameIsValid && <p className="error-text">Name Mustn't be Empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
