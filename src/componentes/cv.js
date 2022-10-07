import React from 'react'

// COMPONENTES PROPIOS
import Titulo from './titulo';
import {Boton} from './boton.js'

// SECCION CURRICULUM
function Cv(){
    return(
        <div className='text-center distanciador' id='cv'>
            <Titulo asunto='Curriculum'/>
                <div>
                    {/*MIRAR CV*/}
                    <a href='https://drive.google.com/file/d/1Sj8PR3IN6RoiVh5L9X-uuItSUN3gnDPP/view' target='blank'>
                    <Boton asunto='Mirar Cv' tamaño='btn-lg border-5 m-5'/> 
                    </a>
                    {/*DESCARGAR CV*/}
                    <a href='https://drive.google.com/u/0/uc?id=1Sj8PR3IN6RoiVh5L9X-uuItSUN3gnDPP&export=download' download='Cv-Juan-Echeverria.pdf'>
                    <Boton asunto='Descargar Cv' tamaño='btn-lg border-5 m-5'/>
                    </a>
                    {/*MAIL DE CONTACTO*/}
                    <a href='mailto:jeecheverria@uc.cl'>
                    <Boton asunto='Contactame!' tamaño='btn-lg border-5 m-5'/> 
                    </a>
                </div>
        </div>
    )
}

export default Cv
