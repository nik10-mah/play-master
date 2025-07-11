import React from "react";
import { Row, Col, Card, Button, Form, Nav } from "react-bootstrap";
import sbgt from "../../sportsbg.svg";
import ballsbg from "../../ballsbg.svg";
const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Row className="g-0">
      <Col md={3} xs={12} className="p-0 bg-secondary l-side position-xs-absolute position-md-relative">
        <Card className="vh-100 ps-0 ms-0 bg-transparent mt-0 pt-0 pb-0 mb-0 border-0 me-5  position-relative">
          <img
            src={sbgt}
            className=" h-100  s-img position-absolute bottom-0 z-2 top-0 end-0  start-0"
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
          <Col md={7} className="d-flex d-md-block align-items-center justify-content-center">
          <Form.Group className="form-wrap" > 
            <h2 className="text-primary  mb-4">Reset Password</h2>
            <p className="text-secondary">Welcome back</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" className="form-control-lg rounded-0 border border-warning"  placeholder="Email address" />
              </Form.Group>

              <Row className="g-0  mt-5 justify-content-center">
                <Col md={9}>
                  <Button
                    variant="secondary"
                    className="fw-bold w-100 fs-3 btn-lg rounded-4 fst-italic text-white"
                    type="submit"
                  >
                    return to the field
                  </Button>
                  <Form.Group className="my-3 text-center">
                    <Form.Text className="text-muted d-flex align-items-center justify-content-center">
                      Not have an account? <Nav.Link className="ps-1 text-primary" href="/register">Create here</Nav.Link>
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            
            </Form>
            </Form.Group>
          </Col>
          
          <Form.Group className="my-1 text-center">
                <Form.Text className="text-primary fst-italic fs-4">
                  An <span className="text-secondary">Email Send To You</span>,
                  Please Check Your Spam
                </Form.Text>
              </Form.Group>
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
