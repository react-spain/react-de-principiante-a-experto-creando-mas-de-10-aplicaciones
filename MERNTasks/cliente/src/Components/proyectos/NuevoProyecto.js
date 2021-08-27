import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

export default function NuevoProyecto() {

    // Obtener el state del formulario

    const proyectosContext = useContext(proyectoContext)
    const { formulario } = proyectosContext;

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <button
            type="buttom"
            className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            {
                formulario ? (

                    <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >

                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
                )

                : null

            }
        </>

    )
}
