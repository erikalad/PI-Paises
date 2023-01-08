import '../styles/Actividad.css'
import React from "react";
import { removeActividad } from "../actions";
import {  useDispatch } from 'react-redux';


export const Actividad = ({nombre,duracion, temporada, dificultad,id}) => {
    const dispatch = useDispatch();
  
    
    const deleteHandle = (id) => {

        dispatch(removeActividad(id))
        
        alert("Actividad borrada");
        console.log(id)
        
      };


    return (
        <div >
            <div>
            <button onClick={() => deleteHandle(id)}>X</button>
            
                <div className="titulo-country-id">{nombre}</div>
                <hr></hr>
                <div className="texto-country-id"><div>Duracion:</div><div> {duracion} hs</div></div>
                <div className="texto-country-id"><div>Temporada: </div><div>{temporada}</div></div>
                <div className="texto-country-id"><div>Dificultad: </div><div>{dificultad}</div></div>
        
            </div>
        </div>
    )
}