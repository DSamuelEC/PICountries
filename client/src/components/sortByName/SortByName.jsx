import { useDispatch } from "react-redux";

import { sortName, setPage } from "../../redux/actions";

const SortByName = () => {
    const dispatch = useDispatch();

    const handlerName = (event) => {
        dispatch(sortName(event.target.value))
        dispatch(setPage(0))
    };

    return (
        <select onChange={handlerName}>
            <option value='A-Z'>Ascending</option>
            <option value='Z-A'>Descending</option>
        </select>
    )
};

export default SortByName;