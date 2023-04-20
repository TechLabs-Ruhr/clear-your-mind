import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function LogoutC() {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "10%" }}>
        <div id="registerLoginContainer">
            <Link to="#" style={{ textDecoration: "none" }}>
                 <div style={{color: "white", cursor: "pointer" }}>Log out</div>  
            </Link>
        </div>
    </div>
  )
}
