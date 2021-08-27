import React from 'react'
import Barra from '../loyout/Barra'
import Sidebar from '../loyout/Sidebar'
import FormTarea from '../tareas/FormTarea'
import ListadoTareas from '../tareas/ListadoTareas'

export default function Proyectos() {
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
