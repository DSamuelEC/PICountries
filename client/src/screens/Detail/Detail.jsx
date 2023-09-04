import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getCountryId } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector(state => state.country)

    useEffect(() => {
        dispatch(getCountryId(id))
    }, [])

    const handlerClean = () => {
        dispatch(cleanDetail())
    }

    return (
        <div>
            <h1>{country.id}</h1>
            <h2>{country.name}</h2>
            <h2>{country.continent}</h2>
            <h2>{country.capital}</h2>
            <h2>{country.population}</h2>
            <img src={country.flag} />

            <button onClick={handlerClean}>
                <Link to='/home'>BACK</Link>
            </button>

        </div>
    )

};

export default Detail;