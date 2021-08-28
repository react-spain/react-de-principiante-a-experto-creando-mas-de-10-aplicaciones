import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
         TAREAS_PROYECTO,
         AGREGAR_TAREA,
         VALIDAR_TAREA,
         ELIMINAR_TAREA
        } from '../../types';

const TareaState = props => {
    // console.log("entro");
    const initialState = {
        tareas: [
            { id:1,  nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id:2, nombre: 'Elegir Colores', estado: true, proyectoId: 1},
            { id:3, nombre: 'Elegir Plataforma de Pago', estado: true, proyectoId: 2},
            { id:4, nombre: 'Elegir Hosting', estado: false, proyectoId: 3},
            { id:5, nombre: 'Elegir Modulo', estado: false, proyectoId: 4}
        ],
        tareasproyecto: null,
        errortarea: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    // Crear las funciones


    // Obtener las tareas del proyecto
    const obtenerTareas = proyectoId => {
        // console.log("obtenerTareas: ", proyectoId);
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar Tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        // console.log("A- agregarTarea");
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muetsra error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }


    // Eliminar Tarea por su ID
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id

        })
    }

    return (

        <TareaContext.Provider 
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;


