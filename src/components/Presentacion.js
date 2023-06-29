import React from 'react'

// COMPONENTES PROPIOS
import {Boton} from './Boton.js';

// SECCION PRESENTACION
function Presentacion(){
    return(
            <div className='primera-seccion'>
                <div className='presentacion'>
                    <p className='hi'>¡Hola!</p>
                    <p className='name'>Soy Juan Echeverría</p>
                    <div className='contenedor'>
                        <p>Desarrollador</p>
                        <section className='animacion'>
                            <div className='primero'><div>FullStack JavaScript</div></div>
                            <div className='segundo'><div>Frontend</div></div>
                            <div className='tercero'><div>Backend</div></div>
                        </section>
                    </div>
                </div>

                <div className='text-center'>
                    <a  href='#portafolio'>
                        <Boton asunto="Ver Portafolio" tamaño='btn-lg border-5'/>
                    </a>
                </div>

            </div>
        )
    }

    export default Presentacion