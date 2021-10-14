import React from "react";

const AddMeal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input type="text" value="name" placeholder="name" />
        <input type="text" value="description" placeholder="desc" />
        <input type="text" value="price" placeholder="price" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddMeal;
