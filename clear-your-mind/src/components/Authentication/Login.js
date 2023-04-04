import React from 'react'
import "../App.css"
import Header from "../Header";
import Footer from "../Footer";
import Button from "../smallComponents/Button";


export default function Login() {
  return (
    <> 
      <Header  isLine={true}/> 
      <div id="container"> 
                <div id="formContainer"> 
                <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
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
