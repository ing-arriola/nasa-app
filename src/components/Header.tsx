import React from "react";
import nasa from "../assets/nasa-logo.svg";
import logo from "../assets/logo.svg";
import "./Logo.css";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center mb-3">
      <h1 className="display-4">React-NASA API Client</h1>
      <h2>By: Jaime Arriola</h2>
      <div className="mb-5">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={nasa} style={{ width: 150 }} alt="nasa-logo" />
      </div>
      <div className="w-100 bg-secondary" style={{ height: 1 }} />
    </Container>
  );
};

export default Header;
