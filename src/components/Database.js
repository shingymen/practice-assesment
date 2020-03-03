import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Database() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  //console.log

  async function GetPatients() {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
    );
    console.log("What is response: ", response.data);

    setPatients(response.data);
  }

  useEffect(() => {
    //console.log("useEffect has been called!");
    GetPatients();
  }, []);

  async function GetDoctors() {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    );
    console.log("What is doctor?: ", response.data);

    setDoctors(response.data);
  }

  useEffect(() => {
    GetDoctors();
  }, []);

  useEffect(() => {
    console.log("Doctor data", doctors);
  }, [doctors]);



  const FullList = patients.map(patient => {
    //console.log("You have the patient's", patient);
    //console.log("you see ID & firstname", patient.id, patient.firstName);
    return (
      <div key={patient.id}>
        <p>Name: {patient.firstName}</p>
        <p>ID: {patient.id} </p>
        <p>Gender: {patient.gender}</p>
        <p>Date of Birth: {patient.dateOfBirth}</p>
        <br />
      </div>
    );
  });

  // const selectedList = datas.map(data => {
  //   console.log("you have the datas!", data);
  //   return (
  //     <div>
  //       <form>
  //         <label>Doctor: </label>
  //         <select>
  //           {/* <option value={data.}>Dr.Adenet</option> */}

  //         </select>
  //       </form>
  //     </div>
  //   );
  // });

  function selectHandler(event) {
  //   setSelectHandler(event.target.value)
  //   console.log("What is it doing? ", setSelectHandler)
  }

  return (
    <div>
      <h2>Patient Database</h2>
      <label>Choose a doctor: </label>

      <select onChange={selectHandler}>


        {doctors.map(doctor => {
          return <option key={doctor.id} value={doctor.id}>{doctor.doctor}</option>
        })}
      </select>

      <h3>Patient's information:</h3>
      {FullList}
    </div>
  );
}
