import React from 'react'

// COMPONENTES REACT
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// SECCION SOBRE MI
function SobreMi(){
    return(
        <Container className='pb-5 scrollmargin' id='sobre-mi'>

            <h2 className='text-center fs-1 mb-4'>Sobre Mí</h2>

            <Row>
                <Col className='col-12 col-lg-7 me-4 mb-lg-1 mb-4'>
                    <h3 className='mb-1 mb-lg-4 fs-2'>¡Conoceme!</h3>
                    <div className='fs-5'>
                        <p>
                            Soy un <b>Desarrollador FullStack JavaScript</b>, me dedico a crear tanto el frontend como 
                            el backend de sitios y aplicaciones web. 
                            Echa un vistazo a algunos de mis trabajos en la sección <b>Portafolio</b>.
                        </p>
                        <p>
                            También me gusta mucho enseñar y compartir lo que he aprendido sobre el desarrollo web 
                            ayudando a otras personas a convertirse en desarrolladores. 
                            Siéntase libre de conectarse o seguirme en mi <b>LinkedIn</b> donde publico contenido 
                            relacionado con el desarrollo y la programación de sitios web.
                        </p>
                        <p>
                            Estoy abierto a <b>oportunidades de trabajo</b> donde pueda contribuir, aprender y crecer. 
                            Si tiene una buena oportunidad que coincida con mis habilidades y experiencia, 
                            no dude en ponerse en <b>contacto</b> conmigo.
                        </p>
                    </div>
                </Col>
                <Col>
                    <h3 className='mb-3 mb-lg-4 fs-2'>Experiencia</h3>
                    <div className='fs-5'>
                        <p><b>Desafío Latam</b>, Tutor: Introducción al Desarrollo Web <br></br> MARZO DEL 2023 - PRESENTE</p>
                        <p><b>Uroff</b>, Desarrollador: Full Stack JavaScript <br></br> ENERO DEL 2023 - MAYO 2023</p>
                        <p><b>Devsafío</b>, Desarrollador, Full Stack JavaScript <br></br> AGOSTO DEL 2022 - DICIEMBRE DEL 2022</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SobreMi