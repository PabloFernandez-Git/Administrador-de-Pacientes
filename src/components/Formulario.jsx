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
    const actualizarState = () => {
        console.log('escribiendo...')
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                />

                <label>Nombre propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario de la mascota"
                    onChange={actualizarState}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
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