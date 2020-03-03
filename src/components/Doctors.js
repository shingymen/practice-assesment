import React, { useState, useEffect } from "react";
import axios from "axios";
import OpenClose from "./OpenClose";

// import Doctor from './Doctor'
export default function DutyPage() {
  const [doctors, setDoctors] = useState([]);
  //!!!(dont activate)==> const [selectedDocterId, setSelectedDocterId] = useState();
  // const url =
  // "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  // const fetchData = async () => {
  // const response = await axios.get(url);
  //console.log(response.data);
  //setDoctors(response.data);

  async function getDoctors() {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );

    console.log("response test:", response.data);

    setDoctors(response.data);
  }

  //const filteredDoctors = doctors.filter(
  //  item => item.docterId === selectedDocterId
  //  );

  //function doctorWasChanged(event) {
  // const docterId = event.target.value;
  // setSelectedDocterId(docterId);
  //}

  useEffect(() => {
    // here stuff happens once
    getDoctors();
  }, []);

  const schedule = doctors.map(doctor => {
    return (
      <div key={doctors.id}>
        {doctor.doctor} {doctor.onDuty === true ? "on duty" : "off duty"}
      </div>
    );
  });

  return (
    <div>
      <h2>Doctor on-site:</h2>
      {schedule}
      <OpenClose />

      {/*<p>Call us at: 020 - 555 5555</p>
      <p>Our opening hours are from: 8.00hr till 17.00hr</p>*/}
    </div>
  );
}
