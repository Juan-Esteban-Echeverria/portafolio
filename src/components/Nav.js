import React from 'react'

function Nav(){ 
    return(
        <nav aria-label='Redes y currículum' className='position-fixed h-100 d-flex align-items-center d-none d-sm-flex'>
            <ul className='nav flex-column border bg-body-tertiary rounded shadow-sm'>
                <li className='nav-item my-4'>
                    <a className='nav-link active' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/jeecheverria/">
                        <img
                            src={require(`../images/Linkedin.png`)}
                            alt="linkedin" className='img-nav'
                        />
                    </a>
                </li>
                <li className='nav-item my-4'>
                    <a className='nav-link' target='_blank' rel="noreferrer" href="https://github.com/Juan-Esteban-Echeverria">
                        <img
                            src={require(`../images/github.png`)}
                            alt="github" className='img-nav'
                        />
                    </a>
                </li>
                <li className='nav-item my-4'>
                    <a className='nav-link' target='_blank' rel="noreferrer" href="https://drive.google.com/drive/folders/1mrH34HsyUny3lAsdpACMpGLam8y5H4VZ?usp=sharing">
                        <img
                            src={require(`../images/CV.png`)}
                            alt="cv" className='img-nav'
                        />
                    </a>
                </li>
            </ul>
        </nav>
    )
  }

export default Nav;