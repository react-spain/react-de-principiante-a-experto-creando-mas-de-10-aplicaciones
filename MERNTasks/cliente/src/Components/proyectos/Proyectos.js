import React, {useContext, useEffect} from 'react'
import Barra from '../loyout/Barra'
import Sidebar from '../loyout/Sidebar'
import FormTarea from '../tareas/FormTarea'
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/authContext';

export default function Proyectos() {

    // extraer la info de autenticacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return (
        <div className="contenedor-app">
            <Sidebar />

            <div className="seccion-principal">
                <Barra/>

                <main>

                    <FormTarea/>

                        <div className="contenedor-tareas">
                            <ListadoTareas />
                        </div>
                </main>
            </div>
        </div>
    )
}
