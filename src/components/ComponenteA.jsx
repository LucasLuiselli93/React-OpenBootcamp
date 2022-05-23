import React from 'react'
import PropTypes from "prop-types"
import ComponenteB from './ComponenteB'

//props a recibir
const ComponenteA = ({nombre = "Lucas",apellido = "Luiselli",email="lucasluiselli93@gmail.com"}) => {

    return (
        <div>
           <h3>Nombre: {nombre}</h3> 
           <h3>Apellido: {apellido}</h3> 
           <h3>Email: {email}</h3> 
           {/* <ComponenteB conectado={true} /> */}
           <ComponenteB conectado={false} />
        </div>
    )
}



 ComponenteA.propTypes={
     nombre:PropTypes.string.isRequired,
     apellido:PropTypes.string.isRequired,
     email:PropTypes.string.isRequired,
    
 }

export default ComponenteA
