import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsSun } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand className="me-5" href="#home">Artistics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link className="fs-6 fw-bold" href="#features">Home</Nav.Link>
            <Nav.Link className="fs-6 fw-bold" href="#pricing">About</Nav.Link>
            <Nav.Link className="fs-6 fw-bold" href="#pricing">Articles</Nav.Link>
            <Nav.Link className="fs-6 fw-bold" href="#pricing">Topics</Nav.Link>
            <Nav.Link className="fs-6 fw-bold" href="#pricing">Contact Us</Nav.Link>
          </Nav>
          <Nav>     
            <Nav.Link href="#deets"><BsSun style={{fontSize:'20px'}} /></Nav.Link>
            <Nav.Link href="#deets"><BiSearch style={{fontSize:'20px', marginLeft: '10px'}} /></Nav.Link>
            <button className="button" style={{ marginLeft: '10px'}}>Sign up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
