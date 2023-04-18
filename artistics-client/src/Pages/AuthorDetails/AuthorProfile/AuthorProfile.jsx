import React from 'react';
import cover from "../../../assets/Authors/cover-1.webp";
import img from "../../../assets/Authors/author-1.webp";
import { Col, Container, Image, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const AuthorProfile = () => {
    return (
        <div>
            <div className="position-relative">
        <Image
          src={cover}
          className="img-fluid"
          style={{ height: "200px", width: "100%" }}
        />
      </div>

      <Container>
        <div
          style={{
            background: "white",
            padding: "25px 30px",
            borderRadius: "45px",
            marginTop: "-60px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Row>
            <Col md={2}>
              <Image
                src={img}
                className="img-fluid"
                style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              />
            </Col>
            <Col md={7}>
              <h2>Dony Herrera</h2>
              <p style={{ fontSize: "16px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                rem? Aspernatur hic porro quisquam eveniet repudiandae ipsam
                architecto aut blanditiis.
              </p>
              <BsFacebook
                style={{
                  fontSize: "22px",
                  color: "#4B5563",
                  cursor: "pointer",
                }}
              />
              <BsTwitter
                style={{
                  fontSize: "22px",
                  marginLeft: "12px",
                  color: "#4B5563",
                  cursor: "pointer",
                }}
              />
              <BsLinkedin
                style={{
                  fontSize: "22px",
                  marginLeft: "12px",
                  color: "#4B5563",
                  cursor: "pointer",
                }}
              />
              <BsInstagram
                style={{
                  fontSize: "22px",
                  marginLeft: "12px",
                  color: "#4B5563",
                  cursor: "pointer",
                }}
              />
            </Col>
            <Col md={3} className="d-flex justify-content-center" >
              <div >
                <button>Follow</button>
                <button>Share</button>
                <button>...</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
        </div>
    );
};

export default AuthorProfile;