import React, { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {};
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.card}>
          <div className={styles.user__container}>
            <label>Username</label>
            <br />
            <input type="text" className={styles.container__input}></input>
          </div>
          <div className={styles.user__container}>
            <label>Age (Years)</label>
            <br />
            <input type="number" className={styles.container__input}></input>
          </div>
          <button type="submit" className={styles.user__button_btn}>
            Add User
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.user_list}>user1 user2</div>
        </div>
      </form>
    </>
  );
};
export default UserInput;
