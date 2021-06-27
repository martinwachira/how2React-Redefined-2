import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserAdd.module.css";
import Button from "../UI/Button.js";

const UserAdd = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invali Data",
        message: "Please enter valid input, both name and age must be filled.",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Age can't be less than one.",
      });
      return;
    }
    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorCheck={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <br />
          <input value={name} type="text" onChange={onNameChange} />

          <label htmlFor="Age">Age (Years)</label>
          <br />
          <input value={age} type="number" onChange={onAgeChange} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default UserAdd;
