import React from 'react'

// TITULOS MODIFICADOS
function Titulo(props){
    return(
        <div className='text-center'>
            <h1 className='titulo1'>{props.asunto}</h1>
            <h2 className='titulo2'>{props.asunto2}</h2>
        </div>
    )
}

export default Titulo