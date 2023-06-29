import React from 'react'

// COMPONENTES REACT
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// LOGO TECNOLOGIA Y TOOLTIP
function Imagen(props){
    return(
        <OverlayTrigger
        placement='bottom'
        overlay={<Tooltip id='img-tooltip' className='fs-4'>{props.ruta}</Tooltip>}>
            
            <img src = {require(`../images/${props.ruta}.png`)}
                        alt="tecnología" className='logo-tecnologia'/>
        </OverlayTrigger>
    )
}

// GRUPO LENGUAJES
function Lenguajes(){
    return(
        <div>
            <Imagen ruta='JavaScript'/>
            <Imagen ruta='Typescript'/>
            <Imagen ruta='SQL'/>
        </div>
    )
}

// GRUPO FRONTEND
function Front(){
    return(
        <div>
            <Imagen ruta='HTML'/>
            <Imagen ruta='CSS'/>
            <Imagen ruta='React'/>
        </div>
    )
}

// GRUPO BACKEND
function Back(){
    return(
        <div>
            <Imagen ruta='Node.js'/>
            <Imagen ruta='Express'/>
            <Imagen ruta='JWT'/>
        </div>
    )
}

// GRUPO DATABASE
function Database(){
    return(
        <div>
            <Imagen ruta='PostgreSQL'/>
            <Imagen ruta='MongoDB'/>
            <Imagen ruta='DBeaver'/>
        </div>
    )
}

// GRUPO CLOUD
function Cloud(){
    return(
        <div>
            <Imagen ruta='github'/>
            <Imagen ruta='Netlify'/>
            <Imagen ruta='Heroku'/>
        </div>
    )
}

// GRUPO HERRAMIENTAS
function Herramientas(){
    return(
        <div>
            <Imagen ruta='Postman'/>
            <Imagen ruta='Docker'/>
            <Imagen ruta='MongoDB-Compass'/>
        </div>
    )
}

// GURPO FRONTEND FRAMEWORK
function FrontendFramework(){
    return(
        <div>
            <Imagen ruta='Bootstrap'/>
            <Imagen ruta='MaterialUI'/>
            <Imagen ruta='Tailwind'/>
        </div>
    )
}

// GURPO TESTING
function Testing(){
    return(
        <div>
            <Imagen ruta='Mocha.js'/>
            <Imagen ruta='Cypress'/>
        </div>
    )
}

// GRUPO DESARROLLO
function Desarrollo(){
    return(
        <div>
            <Imagen ruta='GIT'/>
            <Imagen ruta='ApiRest'/>
            <Imagen ruta='Jira'/>
        </div>
    )
}

// CARTAS DE TECNOLOGIAS
function CartasTecnologia(props) {
    return (
      <Card className="text-center mb-3">
        <Card.Header className='bg-dark text-light fw-semibold'>{props.tipo}</Card.Header>
        <Card.Body>
            {props.lugar}
        </Card.Body>
      </Card>
    );
  }

  // SECCION TECNOLOGIAS
  function Tecnologias(){
    return(
        <div >
            <Container className='scrollmargin' id='tecnologias'>

                <h2 className='text-center fs-1'>Las Tecnologías que Trabajo</h2>
                <p className='text-center fw-bold opacity-50'>*Pasa el puntero por encima de los logos para más información*</p>

                <Row>
                    <Col>
                        <CartasTecnologia tipo="LENGUAJES" lugar={<Lenguajes/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="FRONTEND" lugar={<Front/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="BACKEND" lugar={<Back/>}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CartasTecnologia tipo="DATABASE" lugar={<Database/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="CLOUD" lugar={<Cloud/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="HERRAMIENTAS" lugar={<Herramientas/>}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CartasTecnologia tipo="FRONTEND FRAMEWORK" lugar={<FrontendFramework/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="TESTING" lugar={<Testing/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="DESARROLLO" lugar={<Desarrollo/>}/>
                    </Col>

                </Row>
            </Container>
        </div>
    )
  }
  
  export default Tecnologias 