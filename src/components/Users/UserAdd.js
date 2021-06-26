import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserAdd.module.css";
import Button from "../UI/Button.js";

const UserAdd = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    props.onAddUser(name, age);
    setName("");
    setAge("");
  };

  return (
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
  );
};
export default UserAdd;
