import React from "react";
import "../styles/Paises.css"
import Card from "./Card";
import { MenuLateral } from "./MenuLateral";
import { Nav } from "./Nav";
import Paginado from "./Paginado";

export function Paises(){

    return(
        <div className="paises">
        <Nav/>
        <MenuLateral/>
        </div>
    )
}