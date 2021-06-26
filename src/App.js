import React, { useState } from "react";
// import UserInput from "./components/UserInput/UserInput";
import UserAdd from "./components/Users/UserAdd";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user_name, user_age) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: user_name, age: user_age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <UserAdd onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
