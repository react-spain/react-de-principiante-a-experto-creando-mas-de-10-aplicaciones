import React, { useState } from 'react';

export default function Formulario() {
    // Crear state de citas
    const[cita, actualizarCita] = useState({
        mascota : '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })


    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }


    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        // Validar


        // Asignamos ID

        // Crear la cita 


        // Reiniciar el form
    }


    return (
        <>
            <h2>Crear Cita</h2>

            <form onSubmit={submitCita} >
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea className="u-full-width"
                onChange={actualizarState}
                name="sintomas"
                value={sintomas}
                >
                
                </textarea>

                <button type="submit" 
                className="u-full-width button-primary">Agregar Cita</button>
                        
            </form>
        </>
    )
}
