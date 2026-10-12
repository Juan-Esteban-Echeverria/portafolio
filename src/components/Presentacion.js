import React from 'react'
import { LayoutGrid, Mail } from 'lucide-react';

function Presentacion(){
    return(
            <section className='hero page-width' id='home'>
                <div className='hero-copy'>
                    <p className='eyebrow'><span className='status-dot' />Desarrollo web · Chile</p>
                    <h1>Sitios web que trabajan <span>mejor.</span></h1>
                    <p className='hero-description'>
                        Soy Juan Echeverría, desarrollador web enfocado en WordPress, Next.js,
                        rendimiento y SEO. Creo experiencias digitales rápidas, claras y pensadas
                        para objetivos reales.
                    </p>
                    <div className='hero-actions'>
                        <a className='button button-dark' href='#portafolio'><LayoutGrid className='action-icon' aria-hidden='true' />Ver proyectos</a>
                        <a className='text-link' href='#contacto'><Mail className='action-icon' aria-hidden='true' />Hablemos</a>
                    </div>
                </div>
                <div className='iso-scene' aria-hidden='true'>
                    <div className='iso-grid' />
                    <div className='iso-platform' />
                    <div className='iso-site-card'>
                        <div className='site-topbar'>
                            <span className='site-dot' />
                            <span className='site-dot' />
                            <span className='site-dot' />
                            <span className='site-url-bar' />
                        </div>
                        <div className='site-content'>
                            <div className='site-copy-lines'>
                                <i />
                                <i />
                                <i />
                                <i />
                                <b />
                            </div>
                            <div className='site-image-block'>
                                <i />
                                <i />
                                <i />
                            </div>
                        </div>
                        <div className='site-section-lines'><i /><i /><i /></div>
                    </div>
                    <div className='seo-chip'>
                        <span className='seo-lens' />
                        <span><strong>SEO</strong><br />Contenido indexable</span>
                    </div>
                    <div className='performance-chip'>
                        <span className='performance-bars'><i /><i /><i /></span>
                        <span>Carga eficiente</span>
                    </div>
                    <div className='iso-cube' />
                </div>
            </section>
        )
    }

    export default Presentacion