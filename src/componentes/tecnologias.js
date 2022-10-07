import React from 'react'

// COMPONENTES PROPIOS
import Titulo from './titulo.js';

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
        overlay={<Tooltip id='img-tooltip'>{props.ruta}</Tooltip>}>
            
            <img src = {require(`../imagenes/${props.ruta}.png`)}
                        alt="holi" className='tecno'/>
        </OverlayTrigger>
    )
}

// GRUPO FRONTEND
function Front(){
    return(
        <div>
            <Imagen ruta='html'/>
            <Imagen ruta='css'/>
            <Imagen ruta='bootstrap'/>
            <Imagen ruta='jquery'/>
            <Imagen ruta='react'/>
        </div>
    )
}

// GRUPO BACKEND
function Back(){
    return(
        <div>
            <Imagen ruta='nodejs'/>
            <Imagen ruta='express'/>
            <Imagen ruta='postgresql'/>
            <Imagen ruta='jwt'/>
            <Imagen ruta='mongodb'/>
        </div>
    )
}

// GRUPO DEVOPS
function Devops(){
    return(
        <div>
            <Imagen ruta='git'/>
            <Imagen ruta='github'/>
            <Imagen ruta='npm'/>
            <Imagen ruta='heroku'/>
        </div>
    )
}

// GRUPO LENGUAJES
function Lenguajes(){
    return(
        <div>
            <Imagen ruta='js'/>
            <Imagen ruta='sql'/>
        </div>
    )
}

// GRUPO HERRAMIENTAS
function Herramientas(){
    return(
        <div>
            <Imagen ruta='postman'/>
            <Imagen ruta='docker'/>
            <Imagen ruta='dbeaver'/>
        </div>
    )
}

// GURPO TESTING
function Testing(){
    return(
        <div>
            <Imagen ruta='mochajs'/>
            <Imagen ruta='cypress'/>
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
        <div>
            <Container className='distanciador' id='tecnologias'>

                <Titulo asunto='Las Tecnologias que Trabajo'/>

                <Row>
                    <Col>
                        <CartasTecnologia tipo="FRONTEND" lugar={<Front/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="BACKEND" lugar={<Back/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="DEVOPS" lugar={<Devops/>}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CartasTecnologia tipo="LENGUAJES" lugar={<Lenguajes/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="HERRAMIENTAS" lugar={<Herramientas/>}/>
                    </Col>
                    <Col>
                        <CartasTecnologia tipo="TESTING" lugar={<Testing/>}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
  
  export default Tecnologias 