import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Navbar/NavigationBar.css";


function NavigationBar() {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

