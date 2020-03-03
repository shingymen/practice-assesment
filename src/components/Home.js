// adding react
import React from "react";

import OpenClose from "./OpenClose";

function Home() {
  return (
    <div>
      {/*Content below here*/}
      <h1>Welcome to AMS Gps </h1>
      <OpenClose />

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
