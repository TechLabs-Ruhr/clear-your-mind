import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginRegisterC from './smallComponents/LoginRegisterC';
import LogoutC from './smallComponents/LogoutC';
import Axios from 'axios';




export default function Header({isLine}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  Axios.defaults.withCredentials =  true;
  // Check login status on component mount
  useEffect(() => {
    Axios.get('http://localhost:3002/login') 
      .then((response) => {
        console.log("User logged  in?: " + response.data.loggedIn);
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error('Error checking login status:', error);
      });
  }, []);

  return (
    <>
    <div className="wrapperContainer"> 
    <Navbar  expand="lg" className="paretContainer">
      <Container id="kontener" className="headerContainer">
        <Navbar.Brand className="navbar-brand" href="#home">CLEAR YOUR MIND</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="NavNav flex-grow-5 justify-content-evenly">
            <Nav.Link className="navbar-link" href="/">Home</Nav.Link>
           {/* <Nav.Link className="navbar-link" href="#link">About</Nav.Link> */ }
            <NavDropdown 
              title={<span className="navbar-link dropdown-title">Find Help</span>} 
              id="nav-dropdown"
              className="dropdown-container"
            >
            <NavDropdown.Item className="navbar-link" href="/questionnaire">Questionnaire</NavDropdown.Item>
              <NavDropdown.Item  className="navbar-link" href="#action/3.2">Free Content</NavDropdown.Item>
              <NavDropdown.Item className="navbar-link"  href="/forum">Forum</NavDropdown.Item>
              <NavDropdown.Item className="navbar-link"  href="/MTD">Mood Tracker & Diary</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="loginRegisterContainer">
              {isLoggedIn ? <LogoutC /> : <LoginRegisterC />}
        </Nav.Link>
      </Container>
    </Navbar>
    </div>
    </>
  )
}


