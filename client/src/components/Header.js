import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginRegisterC from './smallComponents/LoginRegisterC';
import LogoutC from './smallComponents/LogoutC';





export default function Header(props) {
  
  const {isLine} = props;

  return (
    <>
    <div style={wrapperContainer}> 
     {props.loginRegister ? <LoginRegisterC/> : null}
     {props.logout ? <LogoutC/> : null}
    <Navbar  expand="lg" style={paretContainer}>
      <Container id="kontener" style={{ 
        margin: "0, auto",
        width: "70%",
        paddingBottom: "20px",
        borderBottom: isLine ? '2px solid white' : 'none'}}>
        <Navbar.Brand style={h1} href="#home">CLEAR YOUR MIND</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={NavNav} className="flex-grow-5 justify-content-evenly">
            <Nav.Link style={navLink} href="/">Home</Nav.Link>
            <Nav.Link style={navLink} href="#link">About</Nav.Link>
            <NavDropdown title={<span className="dropdown">Find Help</span>} id="nav-dropdown">
            <NavDropdown.Item style={navLink} href="/questionnaire">Questionnaire</NavDropdown.Item>
              <NavDropdown.Item  style={navLink} href="#action/3.2">Free Content</NavDropdown.Item>
              <NavDropdown.Item style={navLink}  href="/forum">Forum</NavDropdown.Item>
              <NavDropdown.Item style={navLink}  href="/MTD">Mood Tracker & Diary</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}


const navLink = {
    color: "white",
    backgroundColor: "#337233",
    paddingRight: "70px"
}

const NavNav = {
 marginLeft: "60%",
 color: "white",
 width: "90%",
 display: "flex",
 justifyContent: "space-between"
}


const body = {
    backgroundColor: "#37a837"
}

const h1 = {
    color: "white",
    textDecoration: "none",
    fontSize: "35px",
    fontWeight: "650",
}


const paretContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
}

const wrapperContainer = {
  paddingTop: "50px",


}


