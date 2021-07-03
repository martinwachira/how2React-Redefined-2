import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// const BackDrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onErrorCheck} />;
// };

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onErrorCheck}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
    <div className={classes.backdrop} onClick={props.onErrorCheck} />
      {/* {ReactDom.createPortal(
        <BackDrop onErrorCheck={props.onErrorCheck} />,
        document.getElementById("backdrop-root")
      )} */}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorCheck={props.onErrorCheck}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
