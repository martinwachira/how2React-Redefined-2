import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParag, setShowParag] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const togglePHandler = useCallback(() => {
    if (allowToggle) {
      setShowParag((previousShowP) => !previousShowP);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParag} />
      <Button onClick={allowToggleHandler}>Trigger Toggle</Button>
      <Button onClick={togglePHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
