import { useState } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Entered name:", name);
    setName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} onChange={nameInputHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
