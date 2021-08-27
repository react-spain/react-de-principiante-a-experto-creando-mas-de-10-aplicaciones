import React from 'react'

export default function FormTarea() {
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