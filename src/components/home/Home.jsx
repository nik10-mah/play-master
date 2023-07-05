import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import manbg from "../../manbg.svg";
import homepagecard from "../../homepagecard.svg";
import Background from "../../bgpatterenhome.svg";
import headingtext from "../../headingtext.svg";
import Header from "../layouts/Header";
const Home = () => {
  return (
    <>
    <Header/> 
    <Row
      className="g-0 pt-5"
      style={{
        background: `url(${Background})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col
        md={4}
        xs={12}
        className="p-0 bg-transparent position-xs-absolute position-md-relative"
      >
        <Card className="vh-body ps-0 ms-0 bg-transparent mt-0 pt-0 pb-0 mb-0 border-0 me-5  position-relative">
          <img
            src={manbg}
            className=" h-100 position-absolute bottom-0 z-2 top-0 end-0  start-0"
            alt="sports bacground"
          />
        </Card>
      </Col>
      <Col
        md={8}
        xs={12}
        className="d-flex justify-content-center  mt-3 mt-md-0 vh-body  position-relative"
      >
        <Row className="d-flex justify-content-start w-100 z-3">
          <Col md={8}>
            <img
              src={headingtext}
              className=" d-block mb-4"
              alt="sports bacground"
            />
            <h2 className="text-secondary d-block fst-italic mb-5">
              Coupe du monde de Rugby -{" "}
              <span className="text-primary">
                u 8 Septembre au 28 Octobre 2023
              </span>
            </h2>
            <h3 className="text-secondary mb-5  fst-italic ">
              La solution de pronostics en enterprise pour la coupe du monde de
              rugby la plus aboutie
            </h3>
            <Row className="g-0 mt-5">
              <Col md={12} className="text-center">
                <Button
                  variant="secondary"
                  className=" fs-4 px-4 rounded-4 fst-italic text-white"
                  type="submit"
                >
                  J'organise mon concours
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card
          className=" position-absolute text-center bottom-0  bg-transparent border-0 end-0 me-5"
          style={{ width: "11rem" }}
        >
          <img src={homepagecard} className=" w-100" alt="homepagecard" />
          <Button
            variant="primary"
            className=" d-block  fw-bold mb-2  rounded "
            type="submit"
          >
            Prochain Match
          </Button>
          <h4 className="text-black fw-bolder"> H- 24</h4>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default Home;
