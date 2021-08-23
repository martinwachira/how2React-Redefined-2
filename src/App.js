import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const titleChangeHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={[5, 3, 2, 9, 1]} />
      <Button onClick={titleChangeHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
