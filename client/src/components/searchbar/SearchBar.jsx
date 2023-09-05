import { useState } from "react";
import { useDispatch } from "react-redux";

import { getCountryName } from "../../redux/actions";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()

    const handleOnChange = (event) => {
        setSearch(event.target.value)
    };

    const handleOnClick = () => {
        dispatch(getCountryName(search))
        setSearch('')
    };

    return (
        <div>
            <input
                type="search"
                value={search}
                onChange={handleOnChange}
            />

            <button onClick={handleOnClick}>SEARCH</button>

        </div>
    )
};

export default SearchBar;