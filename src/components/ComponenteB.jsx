import React from 'react'
import PropTypes from "prop-types"

const ComponenteB = ({conectado = false}) => {
    return (
        <div>
            {   conectado ?
                        <h3> Contacto: <span className="text-success">En Línea</span>  </h3> 
                :
                <h3> Contacto: <span className="text-danger">No Disponible</span>  </h3> 
        }
        </div>
    )
}


 ComponenteB.prototype = {
    conectado:PropTypes.bool
 }




export default ComponenteB
