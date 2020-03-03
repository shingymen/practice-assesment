//import react
import React, { useState } from "react";

export default function SignUp() {
  const [PatientNames, setPatientNames] = useState();

  return (
    <div>
      <h2>Patient signup</h2>
      <form>
        <label>
          <p>
            First name:
            <input
              type="text"
              name="firstName"
              placeholder="type here, Firstname"
            />
          </p>
          <p>
            Last name:
            <input
              type="text"
              name="lastname"
              placeholder="type here, Lastname"
            />
          </p>
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
      </form>
    </div>
  );
}
