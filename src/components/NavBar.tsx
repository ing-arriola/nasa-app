import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

//nav-link
const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container>
        <Link className="navbar-brand cursor nav-link" to="home-section">
          NASA API Client
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto ">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/images" className="nav-link">
              Library
            </Link>
            <Link to="/apod" className="nav-link">
              APOD
            </Link>
            <Link to="/rover" className="nav-link">
              Mars Rover
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
