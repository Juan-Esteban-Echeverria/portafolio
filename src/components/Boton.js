import React from 'react'

// COMPONENTES REACT
import Button from 'react-bootstrap/Button';

// BOTON SIMPLE
function Boton(props){ 
    return(
        <Button variant="outline-dark border border-dark fw-bold rounded-pill" 
                className={props.tamaño}>{props.asunto} 
        </Button>
    )
  }

// BOTON REPOSITORIOS
function BotonLink(props){ 
  return(
    <a href={`https://github.com/${props.empresa}${props.link}`} target="blank">
      <Button variant="outline-dark border border-dark fw-bold rounded-pill boton-link" 
              className={props.tamaño}>{props.asunto}
              <img src={require(`../images/github.png`)} className='img-boton-link ps-2' alt='github'/>
      </Button>
    </a>
  )
}

  export {Boton, BotonLink} 