import React from "react";
import { Row, Col, Card, Button, Container, Form } from "react-bootstrap";
import manbg from "../../manbg.svg";
import homepagecard from "../../homepagecard.svg";
import Background from "../../bgpatteren.svg";
import playerimage from "../../playerimage.svg";
import Header from "../layouts/Header";
const Dashboard = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          background: `url(${Background})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Row className="g-0 pt-5">
          <Col md={4} xs={12} className="p-0  bg-transparent ">
            <Card className=" w-75 ps-0 ms-0 bg-transparent mt-0 pt-0 pb-0 mb-0 ">
              <img
                src={playerimage}
                className=" w-100 "
                alt="sports bacground"
              />
            </Card>
          </Col>
          <Col
            md={8}
            xs={12}
            className="d-flex justify-content-center  mt-3 mt-md-0  "
          >
            <Container className=" m-md-0 ">
              <Row className="d-flex g-0 justify-content-md-start justify-content-center w-100 z-3">
                <Col md={12}>
                  <Card className=" mb-4 ">
                    <Card.Body>
                      <h2 className="text-secondary d-block mb-2">Detail's</h2>
                      <p>Choose sparingly !</p>
                      <Row>
                        <Col md={5} className="text-center">
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              className="form-control-lg rounded-0 border border-warning"
                              type="email"
                              defaultValue="Team-TELESIO FC"
                              placeholder="Team-TELESIO FC"
                            />
                          </Form.Group>
                          <p className="text-primary">10P</p>
                        </Col>
                        <Col
                          md={2}
                          className="d-flex justify-content-center mt-3"
                        >
                          -VS-
                        </Col>
                        <Col md={5}  className="text-center">
                          <Form.Group
                            className="mb-1"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              className="form-control-lg rounded-0 border border-warning"
                              defaultValue="Team-GENERALI FC"
                              type="email"
                              placeholder="Email address"
                            />
                          </Form.Group>
                          <p className="text-primary">120P</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          md={12}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <Button
                            variant="secondary"
                            className=" rounded-4 btn-lg fst-italic text-white"
                            type="submit"
                          >
                            Confirm
                          </Button>
                        </Col>
                        <Col
                          md={12}
                          className="d-flex justify-content-center align-items-center"
                        >
                          <p className="text-secondary d-block mt-2">
                            With you current selection if Telesio win you make
                           <span className="text-primary">10P</span> 
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="d-flex g-0 justify-content-md-start justify-content-center w-100 z-3">
                <Col md={6}>
                  <Card className="me-4">
                    <Card.Body>
                      <p className="text-secondary d-block  mb-2">Ranked</p>
                      <p className="text-secondary d-block ">
                        You're 3/32 +3 ranked
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="ms-4">
                    <Card.Body className="text-center">
                      <p className="text-secondary d-block mb-0 ">
                        Score for the match selected
                      </p>
                      <p className="text-secondary d-block mb-0 ">3-2</p>
                      <p className="text-secondary d-block mb-0 ">
                        60% voted foe Telesio
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
