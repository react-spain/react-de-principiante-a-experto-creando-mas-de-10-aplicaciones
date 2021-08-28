import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function FormTarea() {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyectos seleccionado
    if(!proyecto) return null

    // Array destructuring
    const [proyectoActual] = proyecto

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea ..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit bnt-block"
                        value="Agregar Tarea"
                    />
                </div>


            </form>
        </div>
    )
}
