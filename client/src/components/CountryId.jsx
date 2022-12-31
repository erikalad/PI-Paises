import { useEffect , useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryDetails , getActivities} from "../actions";
import '../styles/CountyId.css'


const CountryId = () => {
  const countryDetail = useSelector((state) => state.details);
  const ActivityDetail = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  const [actividades, setActividades] = useState([]);
  

  

  let { id } = useParams();
  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [id]);

  useEffect(() => {
    let actividades = dispatch(getActivities());
    setActividades(actividades)
  }, []);

 console.log(countryDetail, "COUNTRY DETAIL")
 

 


 

  return (
    <div className="country">
      <div >
        <div className="titulo-country-id">
          <img className="img-country-id" src={countryDetail.bandera} alt="No img" />
          <h1>{countryDetail.nombre}</h1>
        </div>
        <div className="detalle-country-id">
        <h1>Detalle del pais</h1>
        <div  className="texto-country-id"><p>Codigo:</p><p>{countryDetail.id}</p></div>
        <div  className="texto-country-id"><p>Region:</p><p>{countryDetail.region}</p></div>
        <div  className="texto-country-id"><p>Subregion: </p><p>{countryDetail.subregion}</p></div>
        <div  className="texto-country-id"><p>Capital: </p><p>{countryDetail.capital}</p></div>
        <div  className="texto-country-id"><p>Area: </p><p>{countryDetail.area} Km2</p></div>
        <div  className="texto-country-id"> <p>Población:</p><p> {countryDetail.poblacion} Hab. </p></div>
        {/* <div  className="texto-country-id"><p>Actividades:</p><p>{ActivityDetail}</p></div> */}
        {console.log(ActivityDetail)}
        </div>
      </div>
      
    </div>
  );
};
export default CountryId;