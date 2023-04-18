import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutFastFacts = () => {
  return (
    <div style={{ background: '#F3F4F6', padding:'60px 0', borderRadius: '40px'}}>
      <Container>
        <div className="mb-4">
          <h2>🚀 Fast Facts</h2>
          <p style={{fontSize:'22px'}}>
            We’re impartial and independent, and every day we create <br></br>{" "}
            distinctive, world-class programmes and content
          </p>
        </div>

        <Row>
            <Col md={4} sm={12}>
                <div style={{ background: 'white', padding: '18px 40px', borderRadius: '25px', marginBottom: '20px'}}>
                <h2>10 million</h2>
                <p style={{fontSize: '16px'}}>Articles have been public around the world (as of Sept. 30, 2021)</p>
                </div>
            </Col>
            <Col md={4} sm={12}>
                <div style={{ background: 'white', padding: '18px 40px', borderRadius: '25px', marginBottom: '20px'}}>
                <h2>100,000</h2>
                <p style={{fontSize: '16px'}}>Registered users account (as of Sept. 30, 2021)</p>
                </div>
            </Col>
            <Col md={4} sm={12}>
                <div style={{ background: 'white', padding: '18px 40px', borderRadius: '25px', marginBottom: '20px'}}>
                <h2>220+</h2>
                <p style={{fontSize: '16px'}}>Countries and regions have our presence (as of Sept. 30, 2021)</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFastFacts;
