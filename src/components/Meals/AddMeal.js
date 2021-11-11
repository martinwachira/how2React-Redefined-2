import React, { useState } from "react";

import { postMeals } from "../../api/MealsApi";

const AddMeal = () => {
  const [initState, setInitState] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInitState({
      ...initState,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mealsObj = {
      name: initState.name,
      description: initState.description,
      price: initState.price,
    };

    postMeals(mealsObj);

    setInitState({
      name: "",
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
      }}
    >
      <p>custom meal input form</p>
      <form onSubmit={handleSubmit}>
        <input
          style={{ display: "block", marginTop: "1rem" }}
          type="text"
          name="name"
          placeholder="meal name"
          value={initState.name}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", marginTop: "1rem" }}
          type="text"
          name="description"
          placeholder="desc"
          value={initState.description}
          onChange={handleChange}
        />
        <input
          style={{ display: "block", marginTop: "1rem" }}
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
