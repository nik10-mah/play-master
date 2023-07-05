import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button, InputGroup, Form, Nav } from "react-bootstrap";
import sbgt from "../../sportsbg.svg";
import ballsbg from "../../ballsbg.svg";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Row className="g-0">
      <Col md={3} xs={12} className="p-0 bg-secondary l-side">
        <Card className="vh-100 ps-0 ms-0 bg-transparent mt-0 pt-0 pb-0 mb-0 border-0 me-5  position-relative">
          <img
            src={sbgt}
            className=" h-100  s-img position-absolute bottom-0 z-2 top-0 end-0  start-0"
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
          <Col md={7} className="d-flex d-md-block align-items-center justify-content-center">
          <Form.Group className="form-wrap" > 
            <h2 className="text-primary mb-4">Login</h2>
            <p className="text-secondary">Welcome back</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control  className="form-control-lg rounded-0 border border-warning" type="email" placeholder="Email address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPwd ? "text" :  "password"}
                    className="border-end-0 form-control-lg rounded-0 border border-warning"
                    placeholder="Password"
                  />
                  <InputGroup.Text
                  
                    className="border-start-0 bg-white rounded-0 border border-warning"
                    id="basic-addon1"
                  >
                    {" "}
                    <FontAwesomeIcon icon={showPwd ? ['far', 'eye-slash'] : ['far', 'eye']} onClick={() => setShowPwd(!showPwd)}/>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Row className="g-0 mt-5 justify-content-center">
                <Col md={9}>
                  <Button
                    variant="secondary"
                    className="fw-bold w-100 btn-lg fs-3 rounded-4 fst-italic text-white"
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
                <Form.Text className="text-primary fst-italic fs-4 d-flex align-items-center justify-content-center">
                  Email Or Password Incorrect ! Forgot Your Password?<Nav.Link className="text-secondary ms-1" href="/ForgotPassword">Reset password</Nav.Link>
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

export default Login;
