import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./HomePage.css";

export const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with your friends</h1>
          <p>Chit Chat lets you connect with the world</p>
          <LinkContainer to={"/login"}>
            <Button type="submit" className="bg-dark border border-dark">
              Get Started
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg "></Col>
    </Row>
  );
};
