import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar className="navbar" expand="md" variant="dark">
      <Navbar.Brand bsPrefix="brand">
        <Link to="/" className="brandText">
          Derrick Lee
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <IndexLinkContainer
            to="/"
            style={{ textDecoration: 'none' }}
            activeClassName="activeLink"
          >
            <Nav.Link bsPrefix="link">Home</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer
            to="/portfolio"
            style={{ textDecoration: 'none' }}
            activeClassName="activeLink"
          >
            <Nav.Link bsPrefix="link">Portfolio</Nav.Link>
          </IndexLinkContainer>
          <LinkContainer
            to="/contact"
            style={{ textDecoration: 'none' }}
          >
            <Nav.Link bsPrefix="link">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
