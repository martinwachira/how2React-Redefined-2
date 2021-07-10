<<<<<<< HEAD
import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
=======
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
    <>
      <UserAdd onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </>
>>>>>>> eb0732819782f9ff8db22e6ee0b308f1cdfcb18c
  );
}

export default App;
