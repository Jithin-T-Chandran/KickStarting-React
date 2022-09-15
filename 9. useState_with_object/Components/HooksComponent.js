import React,{useState} from 'react'

function HooksComponent() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    const onChangeFirstNameHandler = (event) => {
      setName({ ...name, firstName: event.target.value });
    };
    const onChangeLastNameHandler = (event) => {
      setName({ ...name, lastName: event.target.value });
    };
  
    return (
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={onChangeFirstNameHandler}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={onChangeLastNameHandler}
        />
        {/* <h1>Your first name is - {name.firstName}</h1>
        <h1>Your last name is - {name.lastName}</h1> */}
        <h1>{JSON.stringify(name)}</h1>
      </form>
  )
}

export default HooksComponent