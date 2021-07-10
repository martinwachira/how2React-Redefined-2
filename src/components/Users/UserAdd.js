import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserAdd.module.css";
import Button from "../UI/Button.js";
import Wrapper from "../Helpers/Wrapper";

const UserAdd = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  // const onNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const onAgeChange = (e) => {
  //   setAge(e.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Data",
        message: "Please enter valid input, both name and age must be filled.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age can't be less than one.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Wrapper>
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
          <input
            type="text"
            // value={name}
            // onChange={onNameChange}
            ref={nameInputRef}
          />

          <label htmlFor="Age">Age (Years)</label>
          <br />
          <input
            type="number"
            // value={age}
            // onChange={onAgeChange}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default UserAdd;
