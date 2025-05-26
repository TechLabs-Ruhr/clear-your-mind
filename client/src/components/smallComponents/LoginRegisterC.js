import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function LoginRegisterC() {
  return (
    <div>
      <div id="registerLoginContainer">
      <Link to="/login" >
        <div id='linkElement'>Sign in</div>  
      </Link>
      <Link to="/register">
          <div id='linkElement'>Sign up</div>
      </Link>
      </div>
    </div>
  )
}
