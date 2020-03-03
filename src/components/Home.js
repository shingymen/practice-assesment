// adding react
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Doctors from "./Doctors";
import SignUp from "./SignUp";
import Database from "./Database";
import OpenClose from "./OpenClose";

function Home() {
  return (
    <div>
      {/*Content below here*/}
      <h1>Welcome to AMS Gps </h1>
      <p>
        <OpenClose />
      </p>

      <a href="/doctors">
        <button>Who is on duty?</button>
      </a>
      <br />
      <a href="/signup">
        <button>I am a new patient</button>
      </a>
    </div>
  );
}

export default Home;
