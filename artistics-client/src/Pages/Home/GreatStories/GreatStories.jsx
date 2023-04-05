import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import img from "../../../assets/greatStories.webp";

const GreatStories = () => {
  return (
    <div style={{paddingBottom: '60px'}}>
      <Row>
        <Col md={6} sm={12} className="d-flex flex-column justify-content-center">
          <div>
            <h5 style={{ fontSize: "14px", color: "#8A8F9A" }}>
              SUPPER CHANGE YOUR PLANNING POWERS
            </h5>
            <h1 className="mb-4">Become an author and share your great stories</h1>
            <p style={{lineHeight: 1.4}}>
              Become an author you can earn extra income by writing articles.
              Read and share new perspectives on just about any topic. Everyone
              welcome.
            </p>
            <button className="button">Become an Author</button>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div>
            <Image src={img} className="img-fluid text-center" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GreatStories;
