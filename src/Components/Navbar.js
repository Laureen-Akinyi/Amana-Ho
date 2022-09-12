import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to = {"/home"}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to = {"/doctors"}>Doctors</Nav.Link>
            <Nav.Link as={Link} to = {"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to = {"/contact"}>Contact</Nav.Link>
            <Nav.Link as={Link} to = {"/navbar"}>Navbar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
 
}
export default ColorSchemesExample