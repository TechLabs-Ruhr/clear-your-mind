import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function LoginRegisterC() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "10%" }}>
      <div id="registerLoginContainer">
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div style={{color: "white", cursor: "pointer" }}>Login</div>  
      </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div style={{color: "white", cursor: "pointer" }}>Register</div>
        </Link>
      </div>
    </div>
  )
}
