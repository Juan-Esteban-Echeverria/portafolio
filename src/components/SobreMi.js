import React from 'react'

function SobreMi(){
    return(
        <section className='about-section section-anchor' id='sobre-mi'>
            <div className='page-width about-layout'>
                <p className='eyebrow'>Un poco sobre mi trabajo</p>
                <div>
                    <h2>Diseño y desarrollo con foco en lo que pasa después del lanzamiento.</h2>
                    <p className='about-copy'>
                        Trabajo en la creación y mejora de sitios web, combinando desarrollo con una mirada
                        práctica sobre el rendimiento, la visibilidad orgánica y la experiencia de quienes los usan.
                    </p>
                    <a className='text-link' href='https://www.linkedin.com/in/jeecheverria/' target='_blank' rel='noreferrer'><img className='action-icon' src={require('../images/Linkedin.png')} alt='' aria-hidden='true' />Conectemos en LinkedIn</a>
                </div>
            </div>
        </section>
    )
}

export default SobreMi