import { useDispatch } from "react-redux";

import { sortPopulation, setPage } from "../../redux/actions";

const SortByPopulation = () => {
    const dispatch = useDispatch();

    const handlerName = (event) => {
        dispatch(sortPopulation(event.target.value))
        dispatch(setPage(0))
    };

    return (
        <select onChange={handlerName}>
            <option value='Major'>Major</option>
            <option value='Minor'>Minor</option>
        </select>
    )
};

export default SortByPopulation;