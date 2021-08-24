import React from 'react';

export default function Formulario() {
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
                />

                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />

                <label>Sintomas</label>
                <textarea className="u-full-width"
                name="sintomas"
                >
                
                </textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                        
            </form>
        </>
    )
}
