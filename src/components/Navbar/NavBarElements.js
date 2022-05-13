import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const NavBarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
  <Container>
  <Navbar.Brand href="/">Gimmeduck</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Project">Project</Nav.Link>
      <NavDropdown title="more" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Questions">Questions</NavDropdown.Item>
        <NavDropdown.Item href="/ReactDoc">react</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBarElements