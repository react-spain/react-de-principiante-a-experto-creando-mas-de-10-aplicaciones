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


    const actualizarState = () => {
        console.log("escribiendo")
    }


    return (
        <>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                />

                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={actualizarState}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>Sintomas</label>
                <textarea className="u-full-width"
                onChange={actualizarState}
                name="sintomas"
                >
                
                </textarea>

                <button type="submit" 
                className="u-full-width button-primary">Agregar Cita</button>
                        
            </form>
        </>
    )
}
