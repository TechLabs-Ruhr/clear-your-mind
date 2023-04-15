import React, { useState } from 'react'
import "../App.css"
import Header from "../Header";
import Footer from "../Footer";
import Button from "../smallComponents/Button";
import Axios from 'axios'

export default function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!")

    console.log(password + " " + email)

    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if(response.data) {
        alert("You've logged in successfully!");
      } else {
        alert("Wrong username/password combination!");
      }
    });
    
  }
  
  
  return (
    <> 
      <Header  isLine={true}/> 
      <div id="container"> 
        <div id="formContainer"> 
          <form onSubmit={onSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
          
            <div id="buttonContainer2"> 
                        <Button type="submit" title="Login"/>
                    </div>
                    <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
            </div>
           </div>
        <Footer  isLine={true}/>
    </>
  )
}
