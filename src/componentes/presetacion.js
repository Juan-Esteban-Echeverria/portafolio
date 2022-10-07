import React from 'react'

// COMPONENTES PROPIOS
import {Boton} from './boton.js';

// SECCION PRESENTACION
function Presentacion(){
    return(
            <div className='separador'>
                <h1 className='presentacion'>Hola! Mi nombre es</h1> 
                <h1 className='nombre'>Juan Echeverria</h1>
                <h1 className='presentacion'>Soy Desarrollador Fullstack Javascript</h1>
                    <div className='text-center p-5'>
                        <a  href='#portafolio'>
                            <Boton asunto="Ver Portafolio" tamaño='btn-lg border-5'/>
                        </a>
                    </div>

            </div>
        )
    }

    export default Presentacion