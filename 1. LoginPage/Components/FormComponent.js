import React, { useState } from "react";

function FormComponent(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const fromData = {
      EnteredName: name,
      EnteredAge: age,
      EnteredPhone: phone,
    };
   // console.log(fromData);
    props.onSaveData(fromData);
    setName("");
    setAge("");
    setPhone("");
  };
  return (
    <div className="container">
  <h2>Vertical (basic) form</h2>
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="name">User name</label>
        <input id="name" type="text" value={name} onChange={nameHandler}  className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={ageHandler}  className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Number</label>
        <input id="phone" type="number" value={phone} onChange={phoneHandler}  className="form-control" />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-default">Click me</button>
      </div>
    </form>
    </div>
  );
}

export default FormComponent;
