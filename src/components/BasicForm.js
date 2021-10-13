import useCustom from "./../hooks/custom-hook";

const BasicForm = (props) => {
  const {
    value: fname,
    resetInput: resetFname,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
  } = useCustom();
  const {
    value: lname,
    resetInput: resetLname,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
  } = useCustom();
  const {
    value: address,
    resetInput: resetAddress,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useCustom();

  const submitHandler = (e) => {
    e.preventDefault();

    resetFname("");
    resetLname("");
    resetAddress("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fname}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lname}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={address}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
