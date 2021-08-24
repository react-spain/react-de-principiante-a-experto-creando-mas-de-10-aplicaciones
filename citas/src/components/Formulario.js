import React, { useState } from 'react';
import uuid from "uuid/v4";

export default function Formulario({crearCita}) {
    // Crear state de citas
    const[cita, actualizarCita] = useState({
        mascota : '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false);


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
        if( mascota.trim() === ''  || 
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
            ) {
               actualizarError(true);
               console.log('Hay un error');
               return;
        }
        actualizarError(false);

        // Asignamos ID
        cita.id = uuid();

        // Crear la cita
        crearCita(cita);


        // Reiniciar el form
        actualizarCita({
            mascota : '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return (
        <>
            <h2>Crear Cita</h2>

            {  error ? <p className="alerta-error">Todos los campos son obligatorio</p> :null }

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
