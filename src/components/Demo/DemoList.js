import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);
  return (
    <div className={classes.list}>
      <h3>{props.title}</h3>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
