"use client"
import axios from 'axios';
import { send } from 'process';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function page() {
  //1. Hooks area
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [cpass,setCpass] = useState("");
  const [role_type,setRoleType] = useState(""); // This is react hook which is used to manage state in functional component
  //2. Function defination area

  let payload = {
    "fname":fname,
    "lname":lname,
    "username":email,
    "pass":pass,
    "cpass":cpass,
    "role_type": role_type
  }
  
  console.log("Payload Data: ", payload);
  try {
    //Block of code to try
    // we have call to the API
    axios.post('http://localhost:3000/api/v1/register', payload)
    .then(function (response) {
      console.log(response);
      Swal.fire({
        title: "User Registered Successfully!",
        text: "User has been registered successfully.",
        icon: "success"
      });
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "User Not Registered",
        text: "User Not Registered",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    });
  } catch(err) {
    //Block of code to handle errors
    console.log("Error: ", err);
  }

  //3. Return area
  return ( // This is function which has a return statement
    <> {/*This is empty tag*/} 
      <form className="mt-5 w-50 offset-1"> {/*this is react form tag*/}
        <input type="text" name="fname" value={fname} onChange={ (e) => setFname(e.target.value) } className="form-control mb-1" placeholder="Enter your name"/> {/*this is input tag which is self closing tag*/}
        <input type="text" name="lname" value={lname} onChange={ (e) => setLname(e.target.value) } className="form-control mb-1" placeholder="Enter your surname"/> {/*this is input tag which is self closing tag*/}
        <input type="email" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } className="form-control mb-1" placeholder="Enter your email"/> {/*this is input tag which is self closing tag*/}
        <input type="password" name="pass" value={pass} onChange={ (e) => setPass(e.target.value) } className="form-control mb-1" placeholder="Enter your password"/> {/*this is input tag which is self closing tag*/}
        <input type="password" name="confirm_pass" value={cpass} onChange={ (e) => setCpass(e.target.value) } className="form-control mb-1" placeholder="Confirm your password"/> {/*this is input tag which is self closing tag*/}
        <select className="form-control mb-1" name="role_type" value={role_type} onChange={(e) => setRoleType(e.target.value)}> {/*this is select tag*/}
          <option value="">Select Role</option>
          <option value="exporter">Exporter</option>
          <option value="importer_exporter">Importr & Exporter</option>
          <option value="customer_care">Customer Care</option>   
        </select>
        <button
          type="submit"
          onClick={send}
          className="btn btn-success mt-3"
        >
          Sign Up
        </button>
      </form>
    </>
  )
}
