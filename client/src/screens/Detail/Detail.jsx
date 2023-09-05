import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import NavBar from "../../components/navbar/NavBar";
import { cleanDetail, getCountryId } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountryId(id))
        return () => dispatch(cleanDetail())
    }, [id])
    //EL BOTON CUANDO SE DA CLICK EN EL TEXTO AHI SI REDIRECCIONA PERO CUANDO SE DA CLICK EN ALGUNA PARTE DEL BOTON QUE NO SEA EL TEXTO AHI NO ME
    //MANDA A HOME, TOCA ENVOLVER AL BOTON CON LA ETIQUETA LINK, ASI:
    /*
        <Link to='/home'>
            <button>BACK</button>
        </Link>
    */
    return (
        <div>
            <NavBar />
            <h2>ID: {country.id}</h2>
            <h2>NAME: {country.name}</h2>
            <h2>CONTINENT: {country.continent}</h2>
            <h2>CAPITAL: {country.capital}</h2>
            <h2>POPULATION: {country.population}</h2>
            <img src={country.flag} />

        </div>
    )

};

export default Detail;