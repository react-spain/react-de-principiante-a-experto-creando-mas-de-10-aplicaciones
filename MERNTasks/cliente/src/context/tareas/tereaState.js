import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';
import {
         TAREAS_PROYECTO,
         AGREGAR_TAREA,
         VALIDAR_TAREA,
         ELIMINAR_TAREA,
         ESTADO_TAREA,
         TAREA_ACTUAL,
         ACTUALIZAR_TAREA,
         LIMPIAR_TAREA
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
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuidv4();
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


    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea

        })
    }


    // Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        // console.log("guardarTareaActual", tarea)
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }


    // Edita o modifica una tarea
    const actualzarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }


    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (

        <TareaContext.Provider 
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,

                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualzarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )


}

export default TareaState;


