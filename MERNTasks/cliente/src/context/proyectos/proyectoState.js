import React, {useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {  FORMULARIO_PROYECTO  } from '../../types';

const ProyectoState = props => {
    const initialState = {
        formulario:  false
    }


    // Dispach para ejecutar las acciones.
    const [ state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;





