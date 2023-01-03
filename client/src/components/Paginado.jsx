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
        <div className="paginado-conteiner">


            
            <ul className="paginado-clase">
                { pageNumbers && 
                pageNumbers.map(n => (
                    <li className='number' key={n}>      
                        <button className="boton-paginado" onClick={() => paginated(n)}>{n}</button> 
                    </li> 
                ))}
            </ul>
            
        </div>
    )
}