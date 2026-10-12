import React from "react";
import { FileText, Mail } from 'lucide-react';

function Contacto(){
    return(
        <footer className='contact-section section-anchor' id='contacto'>
            <div className='page-width contact-content'>
                <div>
                    <p className='eyebrow'>¿Tienes un proyecto en mente?</p>
                    <h2>Hagamos que tu sitio avance<span>.</span></h2>
                </div>
                <div className='contact-links'>
                    <a className='button button-light' href='mailto:juanecheverriadev@gmail.com'><Mail className='action-icon' aria-hidden='true' />Escríbeme</a>
                    <a href='https://drive.google.com/drive/folders/1mrH34HsyUny3lAsdpACMpGLam8y5H4VZ?usp=sharing' target='_blank' rel='noreferrer'><FileText className='action-icon' aria-hidden='true' />Ver currículum</a>
                </div>
                <div className='footer-meta'><span>Juan Echeverría · Desarrollador web</span><a href='https://www.linkedin.com/in/jeecheverria/' target='_blank' rel='noreferrer'><img className='action-icon' src={require('../images/Linkedin.png')} alt='' aria-hidden='true' />LinkedIn</a></div>
            </div>
        </footer>
    )
}

export default Contacto;