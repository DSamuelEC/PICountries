import { useDispatch } from "react-redux";

import { filterContinent, setPage } from '../../redux/actions.js'

const FilterByContinent = () => {
    const dispatch = useDispatch();

    const handlerContinent = (event) => {
        dispatch(filterContinent(event.target.value))
        dispatch(setPage(0))
    };

    return (
        <div>
            <select onChange={handlerContinent}>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
};

export default FilterByContinent;