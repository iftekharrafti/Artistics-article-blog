import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./Signin.css";
import { Link } from "react-router-dom";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Signin = () => {
  return (
    <div className="background-color py-5">
      <Container>
        <div
          className="shadow-lg"
          style={{
            background: "#fff",
            borderRadius: "60px",
            padding: "50px 40px",
            marginBottom: "60px",
          }}
        >
          <Row className="d-flex justify-content-center">
            <Col md={5}>
              <div className="text-center" style={{ marginBottom: "60px" }}>
                <h1>Login</h1>
                <p className="contact-p">
                  Welcome to our blog magazine Community
                </p>
              </div>

              <div className="signin-icon">
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    background: "#EEF2FF",
                    marginBottom: "15px",
                  }}
                >
                  <FcGoogle /> Continue with Google
                </button>
              </div>

              <div className="signin-icon">
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    background: "#EEF2FF",
                    marginBottom: "15px",
                  }}
                >
                  <BsFacebook style={{ color: "#3B5998" }} /> Continue with
                  Facebook
                </button>
              </div>

              <hr class="hr-text" data-content="OR"></hr>

              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    style={{ borderRadius: "25px", padding: "10px 20px" }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your password"
                    style={{ borderRadius: "25px", padding: "10px 20px" }}
                  />
                </Form.Group>
                <Form.Control
                  type="submit"
                  value="Login"
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
              <div className="text-center mt-3">
                <span>
                  New user? <Link to="/signup">Create an account</Link>
                </span>
              </div>
            </Col>
          </Row>
        </div>

        {/* Newsletter component */}
        <NewsLetter />
      </Container>
    </div>
  );
};

export default Signin;
