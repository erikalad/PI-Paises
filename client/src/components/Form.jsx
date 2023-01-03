import React, { useEffect, useState } from "react";
import { postActivity, getNameCountries, getActivities } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { SmallCountry } from "./SmallCountry";
import '../styles/Form.css'


const Form = () => {
  const countries = useSelector((state) => state.countries);
  const [inputName, setInputName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    setCurrentPage(0);
  }, [countries]);

  useEffect (()=>{
      dispatch(getActivities());
  },[dispatch])

  const filteredC = countries.slice(currentPage, currentPage + 5);

  const [dataForm, setDataForm] = useState({
    nombre: "",
    dificultad: 0,
    duracion: 0,
    temporada: "",
    countryId: [],
  });

  const stateReset = () => {
    setDataForm({
      nombre: "",
      dificultad: 0,
      duracion: 0,
      temporada: "",
      countryId: [],
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
      countryId: dataForm.countryId.concat(e.target.value),
    });
    {console.log(e.target.value)}
    alert("Pais agregado");
  };

  useEffect(() => {
    dispatch(getNameCountries(inputName));
  }, [inputName]);

  const submitForm = (e) => {
    e.preventDefault();
    var form = true;

    if (dataForm["nombre"].length < 2) {
      form = false;
    } else if (!dataForm["countryId"].length >= 1) {
      form = false;
    }

    if (form) {
      dispatch(postActivity(dataForm))
        .then(() => stateReset())
        .then(() => alert("Actividad agregada"));
    } else {
      return alert(" A tu actividad le faltan detalles");
    }
  };

  return (
    <div  >
      <div className="agregar-actividad"> Agregar Actividad</div>
      <div className="form">
        <form onSubmit={(e) => submitForm(e)} className="form">

        <div className="nombre">
            <label className="titulo-form">Seleccionar Paises</label>
            <input
              className="input-form"
              type="text"
              autocomplete="off"
              placeholder="Buscá el pais"
              onChange={submitInputName}
    
            />
          </div>


          <div className="nombre">
          <label className="titulo-form">Nombre</label>
            <input
              className="input-form"
              type="text"
              autocomplete="off"
              placeholder="Nombre de la actividad"
              name="nombre"
              value={dataForm.name}
              onChange={setDataHandler}
            />
          </div>

          <div className="nombre">
            <label className="titulo-form">Seleccionar dificultad</label>
            <select
             className="input-form"
              name="dificultad"
              value={dataForm.dificultad}
              id="dificultad"
              onChange={setDataHandler}
            >
              <option className="input-form" value={1}>1</option>
              <option className="input-form" value={2}>2</option>
              <option className="input-form" value={3}>3</option>
              <option className="input-form" value={4}>4</option>
              <option className="input-form" value={5}>5</option>
            </select>
          </div>




          <div className="nombre">
            <label className="titulo-form">Duración en horas</label>
            <select
             className="input-form"
              name="duracion"
              value={dataForm.duracion}
              id="duracion"
              onChange={setDataHandler}
            >
              <option className="input-form" value={1}>1</option>
              <option className="input-form" value={2}>2</option>
              <option className="input-form" value={3}>3</option>
              <option className="input-form" value={4}>4</option>
              <option className="input-form" value={5}>5</option>
              <option className="input-form" value={6}>6</option>
              <option className="input-form" value={7}>7</option>
              <option className="input-form" value={8}>8</option>
              <option className="input-form" value={9}>9</option>
              <option className="input-form" value={10}>10</option>
              <option className="input-form" value={11}>11</option>
              <option className="input-form" value={12}>12</option>
              <option className="input-form" value={13}>13</option>
              <option className="input-form" value={14}>14</option>
              <option className="input-form" value={15}>15</option>
              <option className="input-form" value={16}>16</option>
              <option className="input-form" value={17}>17</option>
              <option className="input-form" value={18}>18</option>
              <option className="input-form" value={19}>19</option>
              <option className="input-form" value={20}>20</option>
              <option className="input-form" value={21}>21</option>
              <option className="input-form" value={22}>22</option>
              <option className="input-form" value={23}>23</option>
              <option className="input-form" value={24}>24</option>
            </select>
          </div>

          <div className="nombre">
            <label className="titulo-form">Seleccionar Temporada</label>
            <select
             className="input-form"
              name="temporada"
              value={dataForm.temporada}
              id="temporada"
              onChange={setDataHandler}
            >
              <option className="input-form" value="Otoño">Otoño</option>
              <option className="input-form" value="Primavera">Primavera</option>
              <option className="input-form" value="Verano">Verano</option>
              <option className="input-form" value="Invierno">Invierno</option>
            </select>
          </div>
          <div>
            <input className="input-form-boton" type="submit" value="Agregar actividad" />
          </div>
        
          
        </form>
      </div>

     <div className="paises-elegir">
        {filteredC.length < 30
          ? filteredC.map((c) => (
              <div>
                <div className="smallcountry">
                  <SmallCountry key={c.id} nombre={c.nombre} bandera={c.bandera} />
                  <button
                  
                    className="boton-agregar"
                    onClick={setIdHandler}
                    value={c.id}
                    name="countryId"
                    
                  >
                    +
                  </button>
                </div>
                
              </div>
             
            ) )
           
          : console.log("ups")}

          
      
      </div>
    </div>
  );
};

export default Form;