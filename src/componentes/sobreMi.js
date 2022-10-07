import React from 'react'

// COMPONENTES PROPIOS
import Titulo from './titulo.js';

// COMPONENTES REACT
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// SECCION SOBRE MI
function sobreMi(){
    return(
        <Container className='distanciador pb-5' id='sobre-mi'>
            
            <Titulo asunto="Sobre Mi"/>

            <Row>
                <Col className='text-end pe-5 col-lg-6 pb-3'>
                    <img src={require("../imagenes/perfil.jpg")}
                         alt="perfil" className='perfil'/>
                </Col>
                <Col className='col-lg-5'>
                    <div className='pe-5 fs-5'>
                        <p>
                        Soy actor de profesión y ahora desarrollador, ¿combinación curiosa no? 
                        Sin embargo ambos comparten el deseo de transmitir experiencias y transformar a quien las vive.
                        Por mi oficio creo que el trabajo en equipo y la colaboración son la base para cualquier desarrollo y a día de hoy estoy trabajando duro para ser un aporte y un pilar en los equipos a los que pertenezco.
                        De momento aún soy un desarrollador web junior pero estoy muy feliz con mis progresos y siento que aún hay mucho que puedo aprender y eso me emociona y motiva a seguir adelante.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default sobreMi