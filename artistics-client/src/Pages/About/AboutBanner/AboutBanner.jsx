import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutBanner from '../../../assets/about-banner.webp';

const AboutBanner = () => {
    return (
        <div style={{ padding: "80px 0" }}>
            <Container>
                <Row>
                    <Col md={5} sm={12} className="d-flex flex-column justify-content-center">
                        <h1>👋 About Us.</h1>
                        <p>We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</p>
                    </Col>
                    <Col md={7} sm={12}>
                        <Image src={aboutBanner} className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutBanner;