import React from 'react'

function Tecnologias(){
    return(
        <section className='expertise-section section-anchor' id='tecnologias'>
            <div className='page-width'>
                <div className='section-heading expertise-heading'>
                    <div>
                        <p className='eyebrow'>Lo que hago</p>
                        <h2>Especialidades<span>.</span></h2>
                    </div>
                    <p className='section-intro'>De la primera idea a una web que sigue rindiendo en el tiempo.</p>
                </div>
                <div className='expertise-list'>
                    <article><h3>Desarrollo web</h3><p>WordPress · Next.js · Sitios responsivos</p></article>
                    <article><h3>Rendimiento</h3><p>Velocidad · Core Web Vitals · Optimización</p></article>
                    <article><h3>SEO técnico</h3><p>Estructura · Indexación · Visibilidad orgánica</p></article>
                </div>
            </div>
        </section>
    )
}
  
export default Tecnologias