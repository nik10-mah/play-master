import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../logo.svg";
const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Play Masters logo"
          /> {' '}
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/"><FontAwesomeIcon icon="home" className="text-dark"/></Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="/register" className="text-white bg-secondary rounded fs-4 px-3">Create Account</Nav.Link>
            <Nav.Link eventKey={2} href="/login" className="text-white bg-secondary rounded fs-4 px-3 ms-2">
              Login
            </Nav.Link>
            {/* <Form className="d-flex">
              <Stack direction="horizontal" gap={3}><Button variant="secondary" className="text-white btn-lg">Create Account</Button>
              <Button variant="secondary" className="text-white btn-lg">Login</Button>
              </Stack>
            </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
