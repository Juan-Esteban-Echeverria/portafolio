import React from 'react'

// COMPONENTES PROPIOS
import Carrusel from './Carrusel.js';

// SECCION PORTAFOLIO
function Portafolio(){
  return(
    <div id='portafolio' className='scrollmargin'>
        <div>
            <h1 className='text-center'>Portafolio</h1>
        </div>

        <div className='d-flex my-5'>
            <Carrusel titulo='DEVSAFIO'
                    ruta1="devsafio1"
                    ruta2="devsafio2"
                    ruta3="devsafio3"
                    texto=' Proyecto web para la empresa DLAB que pretende ser un puente entre los talentos digitales 
                            y las empresas TI. Para cumplir con este objetivo, se solicitó a la Incubadora Desafío-Latam 
                            crear una plataforma capaz de gestionar los usuarios de aquellos talentos que buscan trabajo en 
                            el área de tecnología, para luego poner a disposición las respectivas pruebas técnicas solicitadas 
                            por las empresas y generar un perfil Job-Ready que los certifique en sus futuras postulaciones.'
                    tecnologia1='Javascript - React'
                    tecnologia2='PostgreSQL - Sequelize'
                    tecnologia3='Node.js - Express.js'
                    empresa='dlab-team/'
                    link='ctd4-backend'/>
        </div>

        <div className='d-flex my-5'>
            <Carrusel titulo='UROFF'
                    ruta1="uroff1"
                    ruta2="uroff2"
                    ruta3="uroff3"
                    texto=' Plataforma que permite a los propietarios de diversos espacios de trabajo, administrar y
                            configurar sus espacios desde una plataforma segura para posteriormente ofrecerlos a traves 
                            de la plataforma marketplace. Luego los usuarios de la plataforma podran filtrar la oferta de 
                            espacios segun ubicación, fecha, precio y categoría.'
                    tecnologia1='React - Vite'
                    tecnologia2='TypeScript - Node.js'
                    tecnologia3='MongoDB - Next.js'
                    empresa='Juan-Esteban-Echeverria/'
                    link='uroff-marketplace'/>
        </div>

        <div className='d-flex my-5'>
            <Carrusel titulo='APEX SHARE'
                    ruta1="apex1"
                    ruta2="apex2"
                    ruta3="apex3"
                    texto=' Proyecto final del BootCamp Desarrollador FullStack Javascript de Desafío Latam, 
                            en donde se creó una aplicación web capaz de registrar y logear usuarios de forma segura, 
                            hacer consultas una API pública para filtrar las estadísticas de los usuarios en un determinado juego 
                            (Apex Legends) y posteriormente almacenar información datos en una base de datos de PostgreSQL.'
                    tecnologia1='Javascript'
                    tecnologia2='PostgreSQL'
                    tecnologia3='Node.js - Express.js'
                    empresa='Juan-Esteban-Echeverria/'
                    link='proyecto-final'/>
        </div>

    </div>
  )
}


export default Portafolio