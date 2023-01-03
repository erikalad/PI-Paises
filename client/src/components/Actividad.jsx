import '../styles/Actividad.css'
import React from "react";



export const Actividad = ({nombre,duracion, temporada, dificultad}) => {
    


    return (
        <div >
            <div>
                
                <div className="titulo-country-id">{nombre}</div>
                <hr></hr>
                <div className="texto-country-id"><div>Duracion:</div><div> {duracion} hs</div></div>
                <div className="texto-country-id"><div>Temporada: </div><div>{temporada}</div></div>
                <div className="texto-country-id"><div>Dificultad: </div><div>{dificultad}</div></div>
               
            </div>
        </div>
    )
}