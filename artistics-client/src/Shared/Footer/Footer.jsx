import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ padding: "60px 0" }} className="background-color">
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <h2>Artistics</h2>
            
            <ul className="list-unstyled mt-3">
                <li className="d-flex align-items-center"><BsFacebook className="icon" /> <span className="icon-text">Facebook</span></li>
                <li className="d-flex align-items-center mt-2"><BsTwitter className="icon" /> <span className="icon-text">Twitter</span></li>
                <li className="d-flex align-items-center mt-2"><BsLinkedin className="icon" /> <span className="icon-text">Linkedin</span></li>
                <li className="d-flex align-items-center mt-2"><BsInstagram className="icon" /> <span className="icon-text">Instagram</span></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="fw-bold">Top Categories</h5>
            <ul className="list-unstyled">
                <li className="footer-text">Garden</li>
                <li className="footer-text mt-2">Jewelry</li>
                <li className="footer-text mt-2">Industrial</li>
                <li className="footer-text mt-2">Automotive</li>
                <li className="footer-text mt-2">Toys</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="fw-bold">Top Authors</h5>
            <ul className="list-unstyled">
                <li className="footer-text">Raihan</li>
                <li className="footer-text mt-2">Rupok</li>
                <li className="footer-text mt-2">Imtiaz</li>
                <li className="footer-text mt-2">Pulok</li>
                <li className="footer-text mt-2">Rafti</li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h5 className="fw-bold">Address</h5>
            
            <p>Dhanmondi, Dhaka</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
