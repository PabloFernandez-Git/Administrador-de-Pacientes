import React, { Fragment, useState } from "react";

const Formulario = () => {

    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Funcion que se ejecuta cuando el usuario escribe en un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        // Validar

        // Asignar un ID

        // Crear la cita

        // Reiniciar el form
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            <form onSubmit={submitCita}>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
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

                <label>hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
};

export default Formulario;
