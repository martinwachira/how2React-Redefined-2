import React, { useState } from "react";
import styles from "./UserInput.module.css";
import UserList from "../UserList/UserList";

const UserInput = (props) => {
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
    const users = {
      user_name: name,
      user_age: age,
    };
    // props.onSaveHandler(users);
    console.log("users", users);
    return users;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.card}>
          <div className={styles.user__container}>
            <label>Username</label>
            <br />
            <input
              value={name}
              type="text"
              className={styles.container__input}
              onChange={onNameChange}
            ></input>
            {name}
          </div>
          <div className={styles.user__container}>
            <label>Age (Years)</label>
            <br />
            <input
              value={age}
              type="number"
              className={styles.container__input}
              onChange={onAgeChange}
            ></input>
          </div>
          <button type="submit" className={styles.user__button_btn}>
            Add User
          </button>
        </div>
      </form>
      <div className={styles.card}>
        <div className={styles.user_list}>
          <UserList />
        </div>
      </div>
    </>
  );
};
export default UserInput;
