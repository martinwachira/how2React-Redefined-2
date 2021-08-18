import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput running");
  return <p>{props.show ? "Thee paragraph" : ""}</p>;
};

export default React.memo(DemoOutput);
