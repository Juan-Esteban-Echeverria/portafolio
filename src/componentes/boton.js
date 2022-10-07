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
    <a href={`https://github.com/Juan-Esteban-Echeverria/${props.link}`} target="blank">
      <Button variant="outline-dark border border-dark fw-bold rounded-pill" 
              className={props.tamaño}>{props.asunto}
              <img src={require(`../imagenes/github.png`)} className='img-boton ps-2' alt='github'/>
      </Button>
    </a>
  )
}

  export {Boton, BotonLink} 