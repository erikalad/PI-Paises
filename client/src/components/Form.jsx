import React, { useEffect, useState } from "react";
import { postActivity, getNameCountries } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { SmallCountry } from "./SmallCountry";
import { Link } from "react-router-dom";
import '../styles/Form.css'


const Form = () => {
  const countries = useSelector((state) => state.countries);
  const [inputName, setInputName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPage(0);
  }, [countries]);

  const filteredC = countries.slice(currentPage, currentPage + 5);

  const [dataForm, setDataForm] = useState({
    nombre: "",
    dificultad: 0,
    duracion: 0,
    temporada: "",
    pais: [],
  });

  const stateReset = () => {
    setDataForm({
      nombre: "",
      dificultad: 0,
      duracion: 0,
      temporada: "",
      pais: [],
    });

    setInputName("");
  };

  const submitInputName = (e) => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  const setDataHandler = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const setIdHandler = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      pais: [...dataForm.pais,e.target.value],
    });
    console.log(dataForm.pais)
    alert("Country Added");
  };

  useEffect(() => {
    dispatch(getNameCountries(inputName));
  }, [inputName]);

  const submitForm = (e) => {
    e.preventDefault();
    var form = true;

    if (dataForm["nombre"].length < 2) {
      form = false;
    } else if (!dataForm["pais"].length >= 1) {
      form = false;
    }

    if (form) {
      dispatch(postActivity(dataForm))
        .then(() => stateReset())
        .then(() => alert("Activity added"));
    } else {
      return alert("Please fill all the fields before creating a new activity");
    }
  };

  return (
    <div  >
      <div className="form">
        <form onSubmit={(e) => submitForm(e)} className="form">
          <div className="nombre">
          <label>Nombre</label>
            <input
              type="text"
              autocomplete="off"
              placeholder="Nombre de la actividad"
              name="nombre"
              value={dataForm.name}
              onChange={setDataHandler}
            />
          </div>

          <div >
            <label>Seleccionar dificultad</label>
            <select
              name="dificultad"
              value={dataForm.dificultad}
              id="dificultad"
              onChange={setDataHandler}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <div>
            <label>Duración en horas</label>
            <select
              name="duracion"
              value={dataForm.duracion}
              id="duracion"
              onChange={setDataHandler}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
            </select>
          </div>

          <div>
            <label>Seleccionar Temporada</label>
            <select
              name="temporada"
              value={dataForm.temporada}
              id="temporada"
              onChange={setDataHandler}
            >
              <option value="Otoño">Otoño</option>
              <option value="Primavera">Primavera</option>
              <option value="Verano">Verano</option>
              <option value="Invierno">Invierno</option>
            </select>
          </div>

          <div >
            <label>Seleccionar Paises</label>
            <input
        
              type="text"
              autocomplete="off"
              placeholder="Buscá el pais"
              onChange={submitInputName}
    
            />
          </div>
          <div>
            <input type="submit" value="Agregar actividad" />
          </div>
        </form>
      </div>

     <div>
        {filteredC.length < 30
          ? filteredC.map((c) => (
              <div>
                <div className="smallcountry">
                  <SmallCountry key={c.id} nombre={c.nombre} bandera={c.bandera} />
                  <button
                    className="boton-agregar"
                    onClick={setIdHandler}
                    value={c.nombre}
                    name="pais"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          : console.log("ups")}
      </div> 

      <div>
        {setDataForm.length > 1
          ? setDataForm.paises.map((c) => (
              <div>
                <div className="smallcountry">
                  <SmallCountry key={c.id} nombre={c.nombre} bandera={c.bandera} />
                  <button
                    className="boton-agregar"
                    onClick={setIdHandler}
                    value={c.nombre}
                    name="pais"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          : console.log(setDataForm.pais)}
      </div> 
    </div>
  );
};

export default Form;