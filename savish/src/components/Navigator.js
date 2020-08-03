import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'
function Navigator() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className="trans">
  <Navbar.Brand href="#home">Savishkar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
      <NavDropdown title="Artwork" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Poems</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Paintings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Stories</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Video</NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/" className="home">home</Nav.Link>
      <Nav.Link eventKey={2} href="/signin" className="signin">
        sign in
      </Nav.Link>
      <Nav.Link eventKey={3} href="/admin" className="admin">
        Admin
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigator
