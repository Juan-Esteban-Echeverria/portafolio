import React from "react";

import {Boton} from './Boton.js'

function Contacto(){
    return(
        <div className='text-center scrollmargin mb-5 mt-5' id='contacto'>
            <h2 className="mb-4">Currículum</h2>
                <div className="d-flex d-lg-block justify-content-around">
                    {/*MIRAR CV*/}
                    <a href='https://drive.google.com/drive/folders/1mrH34HsyUny3lAsdpACMpGLam8y5H4VZ?usp=sharing' target='blank'>
                    <Boton asunto='Mirar Cv' tamaño='btn-lg border-5 mx-0 mx-lg-5'/> 
                    </a>
                    {/*MAIL DE CONTACTO*/}
                    <a href='mailto:juanecheverriadev@gmail.com'>
                    <Boton asunto='Contáctame!' tamaño='btn-lg border-5 mx-0 mx-lg-5'/> 
                    </a>
                </div>
        </div>
    )
}

export default Contacto;