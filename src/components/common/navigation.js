import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navstyle.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/components/home">LONDON HOTEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/components/home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/components/pages/menu">MENU</Nav.Link>
            <Nav.Link as={Link} to="/components/pages/OrderedItemPage">CART</Nav.Link>
            <Nav.Link as={Link} to="/components/pages/partyHall">PARTY HALL</Nav.Link>
            <Nav.Link as={Link} to="/components/pages/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/components/pages/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
