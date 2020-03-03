import React from "react";
import "../App.css";

export default function OpenClose() {
  let today = new Date();
  let time = today.getHours();

  const open = time > 8 && time < 17 ? "Open" : "Closed";

  return (
    <div>
      <p>
        We are: <b>{open}</b>
      </p>
      <p>To make an appointment</p>
      <p>Call: 020 555 5555</p>
    </div>
  );
}
