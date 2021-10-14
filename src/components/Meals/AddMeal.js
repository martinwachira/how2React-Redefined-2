import React, { useState } from "react";

const AddMeal = () => {
  const [initState, setInitState] = useState({
    meal: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInitState({
      ...initState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const mealsObj = {
    //     meal: initState.meal,
    //     description: initState.description,
    //     price: initState.price,
    //   };

    setInitState({
      meal: "",
      description: "",
      price: "",
    });

    setInitState();
    console.log("submitting data...");
  };
  return (
    <div
      style={{
        padding: "2rem",
        color: "black",
        background: "white",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="meal"
          placeholder="meal name"
          value={initState.meal}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="desc"
          value={initState.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={initState.price}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddMeal;
