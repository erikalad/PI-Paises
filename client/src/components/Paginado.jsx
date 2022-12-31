import React from "react";
import '../styles/Paginado.css'

export default function Paginado ({ countriesPerPage, allCountries, paginated }) {
    const pageNumbers = [];
    const pageSecToFinish = allCountries - 9;
    pageNumbers.push(1);
    
    for (let i=2; i<=Math.ceil(pageSecToFinish/9); i++) {
        pageNumbers.push(i);
    }
    return(
        <div className="">
            <ul className="paginado-clase">
                { pageNumbers && 
                pageNumbers.map(number => (
                    <li className='number' key={number}>      
                        <button className="boton-paginado" onClick={() => paginated(number)}>{number}</button> 
                    </li> 
                ))}
            </ul>
        </div>
    )
}