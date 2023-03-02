import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";



function BasicExample() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"8px" , paddingLeft:"10px"}} to="/ler"> 
            <li >Home</li>
            </Link>
            <Link style={{color:"black" ,textDecoration:"none", marginTop:"8px" , paddingLeft:"10px"}} to="*"> 
            <li >Link</li>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;