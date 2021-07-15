import React from "react";

const FormInput = (props) => {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};

export default FormInput;
