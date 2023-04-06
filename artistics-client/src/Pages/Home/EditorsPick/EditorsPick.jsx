import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./EditorsPick.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import bookWithGlass from "../../../assets/book-with-glass.webp";
import sea from "../../../assets/sea.webp";
import hill from "../../../assets/hill.webp";
import author from "../../../assets/Authors/author-1.webp";

const CustomTabList = ({ children }) => {
  return <TabList className="custom-tablist">{children}</TabList>;
};

const EditorsPick = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelect = (index) => {
    setSelectedTab(index);
  };

  const getTabClassName = (index) => {
    return index === selectedTab ? "custom-selected-tab" : "";
  };
  return (
    <div
      style={{ padding: "60px 0", background: "#F3F4F6", borderRadius: "40px" }}
    >
      <Container>
        <h1>🧩 Editor Picks</h1>
        <h4>Discover the most outstanding articles in all topics of life.</h4>

        <div>
          <Tabs onSelect={handleSelect}>
            <CustomTabList>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "100%" }}
              >
                <div className="d-flex align-items-center list-unstyled">
                  <Tab className={getTabClassName(0)} style={{cursor: 'pointer'}}>All Items</Tab>
                  <Tab className={getTabClassName(1)} style={{marginLeft: '20px', cursor: 'pointer'}}>Garden</Tab>
                  <Tab className={getTabClassName(2)} style={{marginLeft: '20px', cursor: 'pointer'}}>Fitness</Tab>
                  <Tab className={getTabClassName(3)} style={{marginLeft: '20px', cursor: 'pointer'}}>Design</Tab>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="/">
                    <span className="view-button">
                      View all <AiOutlineArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </CustomTabList>

            <TabPanel>
              <Row>
                <Col md={5} sm={12}>
                  <Image
                    src={bookWithGlass}
                    className="img-fluid"
                    style={{ borderRadius: "30px" }}
                  />
                  <div>
                    <h2 className="mt-3 mb-4">
                      Lenovo's smarter devices stoke professional passions
                    </h2>
                    <p>
                      Aenean lectus. Pellentesque eget nunc. Donec quis orci
                      eget orci vehicula condimentum.
                    </p>

                    <div className="d-flex align-items-center">
                      <Image
                        src={author}
                        className="img-fluid"
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                        }}
                      />
                      <h6 className="ms-2 mb-0">Foulcher Nathanil</h6>
                      <span className="ms-2"> | </span>
                      <span className="ms-2">May 20 2021</span>
                    </div>
                  </div>
                </Col>
                <Col md={7} sm={12}>
                  <Row>
                    <Col md={8}>
                      <h5 className="mt-3 mb-4">
                        How Ai and teams are benefitting the littlest of
                        patients
                      </h5>
                      <p>
                        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus
                        purus, aliquet at, feugiat non, pretium quis, lectus.
                      </p>

                      <div className="d-flex align-items-center">
                        <Image
                          src={author}
                          className="img-fluid"
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                          }}
                        />
                        <h6 className="ms-2 mb-0">Foulcher Nathanil</h6>
                        <span className="ms-2"> | </span>
                        <span className="ms-2">May 20 2021</span>
                      </div>
                    </Col>
                    <Col md={4}>
                      <Image
                        src={sea}
                        className="img-fluid"
                        style={{ height: "100%", borderRadius: "20px" }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <h5 className="mt-3 mb-4">
                        Diyer and TV host Trisha Hershbergers journey through
                        gaming keeps evolving
                      </h5>
                      <p>
                        Integer tincidunt ante vel ipsum. Praesent blandit
                        lacinia erat. Vestibulum sed magna at nunc
                      </p>

                      <div className="d-flex align-items-center">
                        <Image
                          src={author}
                          className="img-fluid"
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                          }}
                        />
                        <h6 className="ms-2 mb-0">Foulcher Nathanil</h6>
                        <span className="ms-2"> | </span>
                        <span className="ms-2">May 20 2021</span>
                      </div>
                    </Col>
                    <Col md={4}>
                      <Image
                        src={hill}
                        className="img-fluid"
                        style={{ height: "100%", borderRadius: "20px" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <p>ore luigi</p>
            </TabPanel>
            <TabPanel>
              <p>ore peach</p>
            </TabPanel>
            <TabPanel>
              <p>ore bokkor</p>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default EditorsPick;
