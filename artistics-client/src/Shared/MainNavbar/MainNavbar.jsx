import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand className="me-5">
          <Link style={{ color: "black" }} to="/">Artistics</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-center">
            <Nav.Link className="fs-6 fw-bold">
              <Link style={{ color: "black" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="fs-6 fw-bold">
              <Link style={{ color: "black" }} to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="fs-6 fw-bold">
              <Link style={{ color: "black" }} to="/articles">
                Articles
              </Link>
            </Nav.Link>
            <Nav.Link className="fs-6 fw-bold">
              <Link style={{ color: "black" }} to="/topics">
                Topics
              </Link>
            </Nav.Link>
            <Nav.Link className="fs-6 fw-bold">
              <Link style={{ color: "black" }} to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <BsSun style={{ fontSize: "20px" }} />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BiSearch style={{ fontSize: "20px", marginLeft: "10px" }} />
            </Nav.Link>
            <button className="button" style={{ marginLeft: "10px" }}>
              <Link to="/signup" style={{color: "white"}}>Sign up</Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
