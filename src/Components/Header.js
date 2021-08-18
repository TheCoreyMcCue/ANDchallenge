import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "./Logo";

const Header = () => {
  return (
    <Navbar bg="white">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
