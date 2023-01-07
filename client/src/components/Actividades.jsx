import '../styles/Actividades.css'
import React, { useEffect} from "react";
import { Actividad } from './Actividad';
import {  useSelector, useDispatch } from 'react-redux';
import { getActivities } from "../actions";




export default function Actividades() {

    const allActividades = useSelector((state) => state.activities);
    const dispatch = useDispatch();


    useEffect (()=>{
        dispatch(getActivities());
    },[dispatch])


    return(
        <div>
        <h1 className='agregar-actividad'>Actividades Creadas</h1>
        <div className='contenedor-actividades'>
          
          { allActividades.map((c) => {
            return(
                <div >
                    <Actividad nombre={c.nombre} duracion={c.duracion} temporada={c.temporada} dificultad={c.dificultad} />
                </div>
            )
        })}
        </div>
        </div>
    )
}