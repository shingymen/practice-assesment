import React, { useState, useEffect } from "react";
import axios from "axios";

// import Doctor from './Doctor'
export default function DutyPage() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDocterId, setSelectedDocterId] = useState();
  const url =
    "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors";
  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setDoctors(response.data);
  };

  const filteredDoctors = doctors.filter(
    item => item.docterId === selectedDocterId
  );

  function doctorWasChanged(event) {
    const docterId = event.target.value;
    setSelectedDocterId(docterId);
  }

  useEffect(() => {
    // here stuff happens once
    fetchData();
  }, []);

  return (
    <div>
      <h2>Doctor on-site:</h2>
      {filteredDoctors.map(doctor => (
        <h3 key={doctor.id}>{doctor.doctor}</h3>
      ))}
      <p>Call us at: 020 - 555 5555</p>
      <p>Our opening hours are from: 8.00hr till 17.00hr</p>
    </div>
  );
}
