import React from 'react'

// COMPONENTES PROPIOS
import Titulo from './titulo.js';
import {BotonLink} from './boton.js';

// COMPONENTES REACT
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// COMPONENTE CARRUSEL
function Carrusel(props) {
    return (
      <div>
        <Container>

          {/*IMAGENES*/}
          <Carousel className='carrusel'>
            <Carousel.Item>
              <img
                src={require(`../imagenes/${props.ruta1}.png`)}
                alt="Primera Imagen" className='img-carrusel'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require(`../imagenes/${props.ruta2}.png`)}
                alt="Segunda Imagen" className='img-carrusel'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require(`../imagenes/${props.ruta3}.png`)}
                alt="TTercera Imagen" className='img-carrusel'
              />
            </Carousel.Item>
          </Carousel>

          {/*DESCRIPCION Y TECNOLOGIAS*/}
          <Container>
            <Row className='contenedor-parrafo'>
              <Col className='col-lg-7'>
                <p>{props.texto}</p>
              </Col>
              <Col className='ps-5 fw-bold'>
                <p>
                  <h4 className='ps-2'>Tecnologias:</h4>  
                  <ul>
                    <li>{props.tecnologia1}</li>
                    <li>{props.tecnologia2}</li>
                    <li>{props.tecnologia3}</li>
                  </ul> 
                </p>
                <BotonLink asunto="Mirar el Codigo" link={props.link}/> 
              </Col>
            </Row>
          </Container>

        </Container>
      </div>
    );
  }

// SECCION PORTAFOLIO
function Portafolio(){
  return(
      <div>
        <div className='distanciador' id='portafolio'>

      <Titulo asunto='Portafolio'/>
        </div>

        <Titulo asunto2='APEX SHARE'/>
          <Carrusel ruta1="apex1"
                    ruta2="apex2"
                    ruta3="apex3"
                    texto='Proyecto final del BootCamp Desarrollador FullStack Javascript de Desafio Latam, en donde se creó una aplicacion web capaz de registrar y logear usuarios, consultar una API y almacenar informacion en una base de datos de PostgreSQL.'
                    tecnologia1='Javascript'
                    tecnologia2='PostgreSQL'
                    tecnologia3='Noje.js - Express.js'
                    link='proyecto-final'/>

        <Titulo asunto2='API SUPER HERO'/>
          <Carrusel ruta1="hero1"
                    ruta2="hero2"
                    ruta3="hero3"
                    texto='Aplicacion Web que permite a los usuarios la consulta de las caracteristicas y estadisticas de casi todos los superheroes mediante su numero identificador.
                           Esta consulta se efectua a una API publica llamada SuperHeroApi'
                    tecnologia1='Javascript - Ajax'
                    tecnologia2='CanvasJS'
                    tecnologia3='JQuery'
                    link='API-SuperHero'/>

        <Titulo asunto2='BANCO SOLAR'/>
          <Carrusel ruta1="banco1"
                    ruta2="banco2"
                    ruta3="banco3"
                    texto='Proyecto Back End que emula un sistema de transferencias entre dos usuarios, estas transferencias se ejecutan a traves de una base de datos en PostregSQL y quedan registradas en la misma una vez efectuado el cambio en los balances.'
                    tecnologia1='Javascript'
                    tecnologia2='PostgreSQL'
                    tecnologia3='Noje.js'
                    link='postgres-transferencias'/>
    </div>
  )
}


export default Portafolio