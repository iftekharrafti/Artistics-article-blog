import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import hero from "../../../assets/hero.webp";

const Banner = () => {
    return (
        <div style={{ padding: "80px 0" }}>
            <Row>
          <Col md={5} className="d-flex flex-column justify-content-center">
            <div style={{padding: '0 65px 0 0'}}>
              <h1>Far from face but not from heart</h1>
              <p className="mt-4 mb-4 fs-5">
                Let stay at home and share with everyone the most beautiful
                stories in your hometown 🎈
              </p>
              <button className="button">Getting Started</button>
            </div>
          </Col>
          <Col md={7}>
            <Image className="img-fluid" src={hero} />
          </Col>
        </Row>
        </div>
    );
};

export default Banner;