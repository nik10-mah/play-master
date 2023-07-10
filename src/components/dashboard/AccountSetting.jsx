import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Tab,
  Nav,
  Container,
} from "react-bootstrap";

import Background from "../../bgpatteren.svg";
import Header from "../layouts/Header";
const Accountsetting = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          paddingTop: "60px",
        }}
      >
        <Row className="mb-5">
          <Col md={12}>
            <h1 className="text-primary mb-3">Welcome Sir XXX</h1>
            <h2 className="text-secondary fw-bold fst-italic">
              Account Setting
            </h2>
          </Col>
        </Row>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="g-5">
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    className="w-100 fs-2 border-secondary border  text-secondary text-start  mb-2 rounded-0"
                    eventKey="first"
                  >
                    Email Address
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className=" w-100 fs-2 border-secondary border  text-secondary text-start  mb-2 rounded-0"
                    eventKey="second"
                  >
                    Password
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className=" w-100 fs-2 border-secondary border text-secondary text-start  mb-2 rounded-0"
                    eventKey="third"
                  >
                    Back Game
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col md={5} className="mb-3">
                      <p className="text-secondary text-start fs-3 fst-italic">
                        Current Email Address:
                      </p>
                    </Col>
                    <Col md={7} className="text-start mb-3">
                      <p className=" fs-4 fst-italic">XX@Gmail.Com</p>
                    </Col>
                    <Col md={5} className="mb-3">
                      <p className="text-secondary text-start fs-3 fst-italic">
                        New Address Email:{" "}
                      </p>
                    </Col>
                    <Col md={7} className="text-start mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          className="form-control-lg  rounded-0 border border-secondary"
                          type="email"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col md={5} className="mb-3">
                      <p className="text-secondary text-start fs-3 fst-italic">
                        Password:{" "}
                      </p>
                    </Col>
                    <Col md={7} className="text-start mb-3">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          className="form-control-lg  rounded-0 border border-secondary"
                          type="email"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={5} className="mb-3"></Col>
                    <Col md={7} className="text-center">
                      <Button
                        variant="secondary"
                        className="  btn-lg fs-3 px-5 rounded-0 fst-italic text-white"
                        type="submit"
                      >
                        SAVE
                      </Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Password content</Tab.Pane>
                <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
};

export default Accountsetting;
