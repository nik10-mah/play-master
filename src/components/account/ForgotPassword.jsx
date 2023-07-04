import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import sbgt from "../../sportsbg.svg";
import ballsbg from "../../ballsbg.svg";
const ForgotPassword = () => {
  return (
    <Row className="g-0">
      <Col md={3} xs={12} className="p-0 bg-secondary">
        <Card className="vh-100 ps-0 ms-0 bg-secondary mt-0 pt-0 pb-0 mb-0 border-0 me-5  position-relative">
          <img
            src={sbgt}
            className=" h-100 position-absolute bottom-0 z-2 top-0 end-0  start-0"
            alt="sports bacground"
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
            <h2 className="text-primary">Reset Password</h2>
            <p className="text-secondary">welcome back</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email address" />
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
                  An <span className="text-secondary">Email Send To You</span>,
                  Please Check Your Spam
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

export default ForgotPassword;
