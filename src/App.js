import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [toggleP, setToggleP] = useState(false);
  const togglePHandler = () => {
    // setToggleP(!toggleP);
    setToggleP((previousShowP) => !previousShowP);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {toggleP && <p>Thee paragraph</p>}
      <Button onClick={togglePHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
