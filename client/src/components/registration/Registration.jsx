import React, { useState } from 'react'
import './registration.css';
import Input from "../../utils/input/Input"
import {registration} from "../../actions/user"

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
  <div className="registration">
    <div className="registration__header">Registration</div>
       <Input type="text" value={email} setValue={setEmail} placeholder="Enter email..."/>
        <Input type="password" value={password} setValue={setPassword} placeholder="Enter password..."/>
        <button className="registration__btn" onClick={() => registration(email, password)}>Sign in</button>
  </div>
    );
}

export default Registration;