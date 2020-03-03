//import react
import React, { useState } from "react";

export default function SignUp() {
  const [names, setNames] = useState("");
  console.log("What is names:", names);

  function handleChange(event) {
    console.log(event.target.value);
    setNames(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("what name was submitted: ", names);
  }

  return (
    <div>
      <h2>Patient signup</h2>

      <form onSubmit={handleSubmit}>
        <p>Sign up here:</p>
        <label>First name:</label> <br />
        <input
          value={names}
          onChange={handleChange}
          placeholder="type here, Firstname"
        />
        <br />
        <label>Last name:</label> <br />
        <input onChange={handleChange} placeholder="type here, Lastname" />
        <br />
        <label>E-mail:</label>
        <br />
        <input type="email" placeholder="type here, email" />
        <br />
        <label>Phone:</label>
        <br />
        <input type="number" placeholder="type here, number" />
        <br />
        <label>Gender:</label>
        <br />
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="secret">Secret</option>
        </select>
        <br />
        <label>Submit:</label>
        <br />
        <input type="submit" />
        {/*} <label>
         
          <p>
            email:
            <input type="email" name="email" placeholder="type here, email" />
          </p>
          <p>
            Phone:
            <input
              type="number"
              name="phoneNumber"
              placeholder="type here, phonenumber"
            />
          </p>
          <p>
            Gender:
            <select id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="mercedes">Secret</option>
            </select>
          </p>
          <p>
            Date of birth:
            <input
              type="month"
              name="birthday"
              placeholder="type here, birthday"
            />
          </p>
        </label>
        <input type="submit" value="Submit" />
  */}
      </form>
    </div>
  );
}
