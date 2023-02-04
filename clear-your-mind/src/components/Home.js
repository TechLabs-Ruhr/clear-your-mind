import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleIcon from '@mui/icons-material/People';
import SpeedIcon from '@mui/icons-material/Speed';
import { UilDiary } from '@iconscout/react-unicons'
import Button from './smallComponents/Button'

//import { faCoffeefaCoffee } from '@fortawesome/free-solid-svg-icons'



export function Home() {
    return ( <>
    <Navbar  expand="lg" style={paretContainer}>
      <Container style={container}>
        <Navbar.Brand style={h1} href="#home">CLEAR YOUR MIND</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={NavNav} className="flex-grow-5 justify-content-evenly">
            <Nav.Link style={navLink} href="#home">Home</Nav.Link>
            <Nav.Link style={navLink} href="#link">About</Nav.Link>
            <NavDropdown title={<span className="dropdown">Find Help</span>} id="nav-dropdown">
              <NavDropdown.Item style={navLink} href="#action/3.1">Forum</NavDropdown.Item>
              <NavDropdown.Item  style={navLink} href="#action/3.2">
                Free Content
              </NavDropdown.Item>
              <NavDropdown.Item style={navLink} href="#action/3.3">Questionnaire</NavDropdown.Item>
              <NavDropdown.Item style={navLink}  href="#action/3.4">Forum</NavDropdown.Item>
              <NavDropdown.Item style={navLink}  href="#action/3.4">Mood Tracker</NavDropdown.Item>
              <NavDropdown.Item style={navLink}  href="#action/3.4">Diary</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <main id='mainPage'>
            <p id='about'> 
            Clear Your Mind Is A Web Page Designed To Help Physiotherapy Patients Bridge The Time Till Their First Consultation
            </p>
            <div id="callToAction">Bridge The Time Till Your Consultation With Our 5 Step Model!</div>
            <div id="fourStepModel">
              <div className='card'> 
                <AssignmentIcon sx={{ color: "white", fontSize: "200px" }} />
                <div className='cardHeader'>
                  Diagnose    
                </div>
              </div>
              <div className='card'> 
                <LibraryBooksIcon sx={{ color: "white", fontSize: "200px" }}/>
                <div className='cardHeader'>
                  Learn
                </div>
              </div>
              <div className='card'>
                <PeopleIcon sx={{ color: "white", fontSize: "200px" }}  />
                <div className='cardHeader'>
                  Find Support
                </div>
              </div>
              <div className='card'>
                <SpeedIcon sx={{ color: "white", fontSize: "200px" }}/>
                <div className='cardHeader'>
                  Measure
                </div>
              </div>
              <div className='card'>
                <UilDiary size="200" color="white"/>
                <div className='cardHeader'>
                  Track
                </div>
              </div>
            </div>
          <Button title={"Learn More"}/> 


      </main>




    </> );
}

const navLink = {
    color: "white",
    backgroundColor: "#337233",
    paddingRight: "70px"
}

const NavNav = {
  marginLeft: "50%",
 color: "white",
 width: "800px",
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

const container = {
    margin: "0, auto",
    width: "70%",
    borderBottom: "2px solid white"
}

const paretContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70px",
}

