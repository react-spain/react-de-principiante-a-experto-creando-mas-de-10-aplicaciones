
import {
         TAREAS_PROYECTO, 
         AGREGAR_TAREA, 
         VALIDAR_TAREA, 
         ELIMINAR_TAREA,
         ESTADO_TAREA
        } from '../../types';

export default (state, action) => {
    switch (action.type) {
        
        case TAREAS_PROYECTO:
            // console.log("REDUCER: TAREAS_PROYECTO");
            // console.log("state.tareas", state.tareas);
            // console.log("action.payload ", action.payload );
            return {
                ...state,
                tareasproyecto: state.tareas.filter( tarea => tarea.proyectoId === action.payload )
            };
        
        case AGREGAR_TAREA:
            // console.log("B REDUCER: AGREGAR_TAREA");
            // console.log("state.tareas", state.tareas);
            // console.log("action.payload ", action.payload );
            return {
                ...state,
                tareas : [action.payload, ...state.tareas],
                errortarea: false
            };

        case ELIMINAR_TAREA:
                // console.log("REDUCER: ELIMINAR_TAREA")
                // console.log("tarea before: ", state.tareas)
                // console.log(action.payload)
                // console.log("tarea after: ",state.tareas.filter( tarea => tarea.id !== action.payload))
                return {
                    ...state,
                    tareas: state.tareas.filter( tarea => tarea.id !== action.payload )
                };
                
        case ESTADO_TAREA:
               return {
                        ...state,
                        tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload :tarea)
                    };    
                

        case VALIDAR_TAREA:
            return {
                    ...state,
                    errortarea: true
            };    

        default:
            return state;
            
    }
}