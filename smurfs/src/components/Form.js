import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    props.submitForm(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name: <span></span>
        <input
          required
          type="text"
          id="nameInput"
          name="name"
          onChange={changeHandler}
        />
      </label>
      <br />
      <label>
        Age: <span></span>
        <input
          required
          type="number"
          id="ageInput"
          name="age"
          onChange={changeHandler}
        />
      </label>
      <br />
      <label>
        Height: <span></span>
        <input
          required
          type="text"
          id="heightInput"
          name="height"
          onChange={changeHandler}
        />
      </label>
      <br />
      <br />
      <button>ADD SMURF</button>
    </form>
  );
};

export default Form;