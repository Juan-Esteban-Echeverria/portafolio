import React from 'react'

// COMPONENTES REACT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// NAVBAR
function Navegacion() {
    return (
      <Navbar className='fw-bold bg-light sticky-top expand-lg'>
        
          {/*LOGO*/}
          <Navbar.Brand href="#home" className='ms-5'>Juan Echeverria</Navbar.Brand>

        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/*SECCIONES*/}
            <Nav className="ms-auto gap-5">
              <Nav.Link href="#portafolio">PORTAFOLIO</Nav.Link>
              <Nav.Link href="#sobre-mi">SOBRE MI</Nav.Link>
              <Nav.Link href="#tecnologias">TECNOLOGIAS</Nav.Link>
              <Nav.Link href="#cv">CV</Nav.Link>
              <Nav.Link href="https://github.com/Juan-Esteban-Echeverria" target="blank">GITHUB</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/jeecheverria/" target="blank">LINKEDIN</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Navegacion