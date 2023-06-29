import React from 'react'

// COMPONENTES PROPIOS
import {BotonLink} from './Boton.js';

// COMPONENTES REACT
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// COMPONENTE CARRUSEL
function Carrusel(props) {
    return (
      <div className='d-block d-lg-flex mb-5'>

          <h2 className='mb-4 text-center d-block d-lg-none'>{props.titulo}</h2>

          {/*IMAGENES*/}
          <div>
            <Carousel className='carrusel'>
              <Carousel.Item>
                <img
                  src={require(`../images/${props.ruta1}.png`)}
                  alt="Primera Imagen" className='img-carrusel'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require(`../images/${props.ruta2}.png`)}
                  alt="Segunda Imagen" className='img-carrusel'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={require(`../images/${props.ruta3}.png`)}
                  alt="Tercera Imagen" className='img-carrusel'
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/*DESCRIPCION Y TECNOLOGIAS*/}
          <div>
            <Row>
              <Col className=' ms-1 ms-lg-5'>
                <h2 className='ms-5 mb-4 text-center d-none d-sm-block'>{props.titulo}</h2>
                <p className='mb-4 mt-4 mt-lg-1'>{props.texto}</p>
              </Col>
            </Row>
            <Row className='ps-1 ps-lg-5 fw-bold d-block d-lg-flex'>
              <Col>               
                <p>
                  <h4 className='ps-1 ps-lg-2'>Tecnologías:</h4>  
                  <ul>
                    <li>{props.tecnologia1}</li>
                    <li>{props.tecnologia2}</li>
                    <li>{props.tecnologia3}</li>
                  </ul> 
                </p>
              </Col>
              <Col className='d-flex justify-content-start justify-content-lg-end align-items-end mt-lg-1 mt-4'>            
                <BotonLink asunto="Mirar el Código" link={props.link} empresa={props.empresa}/> 
              </Col>
            </Row>
          </div>

      </div>
    );
  }

  export default Carrusel;