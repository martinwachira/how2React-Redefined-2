import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const titleChangeHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 2, 9, 1], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={titleChangeHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
