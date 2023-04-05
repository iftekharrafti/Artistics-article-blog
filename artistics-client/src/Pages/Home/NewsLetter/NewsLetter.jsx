import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import img from "../../../assets/newsletter.webp";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div>
      <div style={{ paddingBottom: "60px" }}>
      <Row>
        <Col
          md={6}
          sm={12}
          className="d-flex flex-column justify-content-center"
        >
          <div style={{ paddingRight: "60px" }}>
            <h2 className="mb-4">Join our newsletter 🎉</h2>
            <p>
              Read and share new perspectives on just about any topic. Everyones
              welcome.
            </p>
            <div>
              <div className="d-flex align-items-center mt-4">
                <h5
                  style={{
                    fontSize: "16px",
                    background: "#DBEAFE",
                    padding: "3px 10px",
                    borderRadius: "15px",
                  }}
                >
                  01
                </h5>
                <h5 style={{ fontSize: "17px", marginLeft: "15px" }}>
                  Get more discount
                </h5>
              </div>
              <div className="d-flex align-items-center mt-2">
                <h5
                  style={{
                    fontSize: "16px",
                    background: "#FEE2E2",
                    padding: "3px 10px",
                    borderRadius: "15px",
                  }}
                >
                  02
                </h5>
                <h5 style={{ fontSize: "17px", marginLeft: "15px" }}>
                  Get Get Premium magazines
                </h5>
              </div>
            </div>
            <form action="">
              <div className="d-flex align-items-center mt-4">
                <input
                  className="py-1 rounded-fill"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  style={{
                    borderRadius: "70px",
                    padding: "12px",
                    width: "60%",
                    border: '1px solid #8A8F9A'
                  }}
                />
                <BsFillArrowRightCircleFill style={{fontSize: '25px', margin: '-30px', cursor: 'pointer'}} />
              </div>
            </form>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <Image src={img} className="img-fluid" />
        </Col>
      </Row>
      </div>
      <hr style={{margin: 0}} />
    </div>
  );
};

export default NewsLetter;
