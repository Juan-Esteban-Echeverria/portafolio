import React from 'react'

const proyectos = [
        {
                nombre: 'Spa Roy Sothers',
                url: 'https://sparoysothers.cl/',
                categoria: 'Spa y bienestar',
                descripcion: 'Una experiencia digital para una marca con identidad propia.',
                contexto: 'Sitio de spa y bienestar que presenta la identidad de Spa Roy Sothers y su oferta de servicios.',
                clase: 'project-spar',
                captura: false
        },
        {
                nombre: 'Valor Máximo',
                url: 'https://valormaximo.com/',
                categoria: 'Consultoría · SAP y GIS',
                descripcion: 'Soluciones especializadas para utilities y gestión de activos.',
                contexto: 'Consultoría en soluciones SAP y ESRI para utilities, gestión de activos y procesos operacionales.',
                clase: 'project-valor'
        },
        {
                nombre: 'MAS Analytics',
                url: 'https://masanalytics.com/',
                categoria: 'Datos e inteligencia artificial',
                descripcion: 'Estrategia, datos e inteligencia artificial para transformar organizaciones.',
                contexto: 'Servicios de estrategia, ingeniería de datos, analítica e inteligencia artificial para organizaciones.',
                clase: 'project-mas'
        },
        {
                nombre: 'Ordóñez Abogados',
                url: 'https://obh.cl/',
                categoria: 'Servicios legales',
                descripcion: 'Presencia digital para un estudio jurídico con foco empresarial.',
                contexto: 'Estudio jurídico con asesoría laboral, empresarial y penal para empresas y particulares.',
                clase: 'project-obh'
        }
];

function Portafolio(){
  return(
                <section id='portafolio' className='projects-section section-anchor'>
                        <div className='page-width'>
                                <div className='section-heading'>
                                        <div>
                                                <p className='eyebrow'>Trabajo seleccionado</p>
                                                <h2>Proyectos en producción<span>.</span></h2>
                                        </div>
                                        <p className='section-intro'>Sitios reales, hechos para marcas y equipos que necesitan crecer en digital.</p>
                                </div>
                                <div className='project-grid'>
                                        {proyectos.map((proyecto) => (
                                                <article className='project-card' key={proyecto.nombre}>
                                                        <a className={`project-preview ${proyecto.clase}`} href={proyecto.url} target='_blank' rel='noreferrer' aria-label={`Visitar ${proyecto.nombre}`}>
                                                                <div className='project-placeholder'>
                                                                        <span className='project-placeholder-kicker'>{proyecto.categoria}</span>
                                                                        <strong>{proyecto.nombre}</strong>
                                                                        <span className='project-placeholder-url'>{proyecto.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                                                                </div>
                                                                {proyecto.captura !== false && <img src={`https://api.microlink.io/?url=${encodeURIComponent(proyecto.url)}&meta=false&screenshot=true&embed=screenshot.url`} alt={`Vista previa del sitio ${proyecto.nombre}`} loading='lazy' onError={(event) => { event.currentTarget.style.display = 'none'; }} onLoad={(event) => { if (event.currentTarget.naturalWidth < 20) event.currentTarget.style.display = 'none'; }} />}
                                                                <span className='preview-open' aria-hidden='true'>↗</span>
                                                        </a>
                                                        <div className='project-details'>
                                                                <div>
                                                                        <p className='project-category'>{proyecto.categoria}</p>
                                                                        <h3>{proyecto.nombre}</h3>
                                                                        <p className='project-description'>{proyecto.descripcion}</p>
                                                                </div>
                                                                <a className='project-link' href={proyecto.url} target='_blank' rel='noreferrer' aria-label={`Abrir ${proyecto.nombre} en una nueva pestaña`}>↗</a>
                                                        </div>
                                                </article>
                                        ))}
                                </div>
                                <div className='project-context'>
                                        <div className='context-heading'>
                                                <p className='eyebrow'>Más información</p>
                                                <h3>Contexto de cada sitio</h3>
                                        </div>
                                        <div className='context-list'>
                                                {proyectos.map((proyecto) => (
                                                        <details className='context-item' key={proyecto.nombre}>
                                                                <summary>
                                                                        <span>{proyecto.nombre}</span>
                                                                        <span className='context-category'>{proyecto.categoria}</span>
                                                                </summary>
                                                                <div className='context-content'>
                                                                        <p>{proyecto.contexto}</p>
                                                                        <a href={proyecto.url} target='_blank' rel='noreferrer'>Visitar sitio <span aria-hidden='true'>↗</span></a>
                                                                </div>
                                                        </details>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </section>
  )
}


export default Portafolio