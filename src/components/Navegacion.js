import React from 'react'

// COMPONENTES REACT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// NAVBAR
function Navegacion() {
    return (
      <Navbar collapseOnSelect expand="lg" className='fw-bold bg-light fixed-top'>
        
        <Container>
          {/*LOGO*/}
          <Navbar.Brand href="#home" className='fs-3'>Juan Echeverría</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            {/*SECCIONES*/}
            <Nav className="ms-auto gap-5 fs-5">
              <Nav.Link href="#portafolio">PORTAFOLIO</Nav.Link>
              <Nav.Link href="#sobre-mi">SOBRE MÍ</Nav.Link>
              <Nav.Link href="#tecnologias">TECNOLOGÍAS</Nav.Link>
              <Nav.Link href="#contacto">CONTACTO</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Navegacion