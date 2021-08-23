import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);
  return (
    <div className={classes.list}>
      <h1>{props.title}</h1>
      <ul>
        {sortedList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
