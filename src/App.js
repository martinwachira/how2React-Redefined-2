import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParag, setShowParag] = useState(false);
  const togglePHandler = () => {
    // setToggleP(!toggleP);
    setShowParag((previousShowP) => !previousShowP);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParag} />
      <Button onClick={togglePHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
