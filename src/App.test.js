import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

it("renders correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});
