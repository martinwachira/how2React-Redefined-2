import useCustom from "./../hooks/custom-hook";

const BasicForm = () => {
  const {
    value: fname,
    inputHasError: fNameError,
    valueIsValid: fNameIsValid,
    resetInput: resetFname,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
  } = useCustom((value) => value.trim("") !== "");
  const {
    value: lname,
    inputHasError: lNameError,
    valueIsValid: lNameIsValid,
    resetInput: resetLname,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
  } = useCustom((value) => value.trim("") !== "");
  const {
    value: address,
    inputHasError: addressError,
    valueIsValid: addressIsValid,
    resetInput: resetAddress,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useCustom((value) => value.includes("@") && value.includes("."));

  let formIsValid = false;

  if (fNameIsValid && lNameIsValid && addressIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!fNameIsValid && !lNameIsValid) {
      return;
    }

    resetFname("");
    resetLname("");
    resetAddress("");
  };

  const fNameClasses = fNameError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameError ? "form-control invalid" : "form-control";
  const addressClasses = addressError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fname}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameError && (
            <p className="error-text">First Name Mustn't be Empty</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lname}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameError && (
            <p className="error-text">Last Name Mustn't be Empty</p>
          )}
        </div>
      </div>
      <div className={addressClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={address}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressError && <p className="error-text">Wrong email Format</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
