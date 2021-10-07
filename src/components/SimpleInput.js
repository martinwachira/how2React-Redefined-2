import useInput from "./../hooks/use-input";

const SimpleInput = () => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    email: address,
    emailIsValid,
    emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    reset: resetName,
  } = useInput(
    (value) => value.trim("") !== "",
    (email) => email.includes("@") && email.includes(".")
  );

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid) {
      return;
    }

    resetName();
  };

  const inputClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameHasError && <p className="error-text">Name Mustn't be Empty</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="address">Email</label>
        <input
          type="email"
          id="address"
          value={address}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">Incorrect email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
