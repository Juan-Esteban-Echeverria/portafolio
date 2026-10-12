import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegacion() {
    return (
      <Navbar collapseOnSelect expand="lg" className='site-navbar'>
        <Container>
          <Navbar.Brand href="#home" className='brand-mark'>Juan Echeverria Dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#portafolio">Proyectos</Nav.Link>
              <Nav.Link href="#sobre-mi">Sobre mí</Nav.Link>
              <Nav.Link href="#tecnologias">Especialidades</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Navegacion