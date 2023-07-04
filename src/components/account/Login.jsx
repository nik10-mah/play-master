import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import sbgt from "../../sportsbg.svg";
import ballsbg from "../../ballsbg.svg";

const Login = () => {
  return (
    <Row className="g-0">
      <Col md={3} xs={12} className="p-0 bg-secondary">
        <Card className="vh-100 ps-0 ms-0 bg-secondary mt-0 pt-0 pb-0 mb-0 border-0 me-5  position-relative">
          <img
            src={sbgt}
            className=" h-100 position-absolute bottom-0 z-2 top-0 end-0  start-0"
            alt="sports background"
          />
        </Card>
      </Col>
      <Col
        md={9}
        xs={12}
        className="d-flex justify-content-center align-items-md-center mt-3 mt-md-0 vh-100 position-relative"
      >
        <Card className="vh-100 w-25 divider-bg border-0 position-absolute"></Card>
        <Row className="d-flex justify-content-center w-100 z-3">
          <Col md={6}>
            <h2 className="text-primary">Login</h2>
            <p className="text-secondary">welcome back</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    className="border-end-0"
                    placeholder="Password"
                  />
                  <InputGroup.Text
                    className="border-start-0 bg-transparent"
                    id="basic-addon1"
                  >
                    {" "}
                    <FontAwesomeIcon icon="fa-eye" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Row className="g-0 justify-content-center">
                <Col md={8}>
                  <Button
                    variant="secondary"
                    className="fw-bold w-100 rounded-4 fst-italic text-white"
                    type="submit"
                  >
                    return to the field
                  </Button>
                  <Form.Group className="my-3 text-center">
                    <Form.Text className="text-muted">
                      Not have a account? Create here
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="my-1 text-center">
                <Form.Text className="text-primary fst-italic">
                  Email Or Password Incorrect ! Forgot Your Password?{" "}
                  <span className="text-secondary">Reset password</span>
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <img
          src={ballsbg}
          className=" w-25 position-absolute bottom-0  end-0"
          alt="ballsbg"
        />
      </Col>
    </Row>
  );
};

export default Login;
