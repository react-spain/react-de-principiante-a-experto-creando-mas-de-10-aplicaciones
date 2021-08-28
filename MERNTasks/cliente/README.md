#  Definimos el TYPE
```
export const AGREGAR_TAREA = 'TAREAS_PROYECTO';
```

# Vamos al state y lo importamos, creamos la función
```
import {
         TAREAS_PROYECTO,
         AGREGAR_TAREA
        } from '../../types';
```

```
// Agregar Tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
```

La pongo disponible en el context
```
<TareaContext.Provider 
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
 ``` 


# Vamos al reducer
```
 import {
         TAREAS_PROYECTO, AGREGAR_TAREA
        } from '../../types'; 
```  

```  
case AGREGAR_TAREA:
            return {
                ...state,
                tareas : [...state.tareas, action.payload] 
            };
```  