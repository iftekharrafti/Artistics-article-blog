import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Contact = () => {
  return (
    <div className="background-color py-5">
      <Container>
        <div className="shadow-lg"
          style={{
            background: "#fff",
            borderRadius: "60px",
            padding: "50px 40px",
            marginBottom: '60px'
          }}
        >
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h1 style={{fontSize:'44px'}}>Contact us</h1>
            <p className="contact-p">
              Drop us message and we will get back for you.
            </p>
          </div>
          <Row>
            <Col md={6}>
              <div style={{ padding: "0 110px 0 0" }}>
                <div>
                  <h6>🗺 ADDRESS</h6>
                  <p className="contact-p">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>

                <div>
                  <h6>💌 EMAIL</h6>
                  <p className="contact-p">nc.example@example.com</p>
                </div>

                <div>
                  <h6>☎ PHONE</h6>
                  <p className="contact-p">000-123-456-7890</p>
                </div>
                <div>
                  <h6>🌏 SOCIALS</h6>
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
                </div>
              </div>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Full name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    style={{ borderRadius: "25px", padding: "10px 20px" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{ borderRadius: "25px", padding: "10px 20px" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message here"
                    style={{ borderRadius: "15px", padding: "10px 20px" }}
                  />
                </Form.Group>
                <Form.Control
                  type="submit"
                  value="Send Message"
                  style={{
                    borderRadius: "25px",
                    padding: "10px 20px",
                    background: "#4F46E5",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginTop: "20px",
                  }}
                />
              </Form>
            </Col>
          </Row>
        </div>
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Contact;
