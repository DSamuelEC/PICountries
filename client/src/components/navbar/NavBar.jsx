import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetAll } from "../../redux/actions";
import SearchBar from "../searchbar/SearchBar";

const NavBar = () => {
    const dispatch = useDispatch();

    const handlerReset = () => {
        dispatch(resetAll())
    };

    return (
        <div>
            <Link to='/home' onClick={handlerReset}>
                <h3>HOME</h3>
            </Link>

            <Link to='/'>
                <h3>LANDING</h3>
            </Link>

            <SearchBar />

        </div>
    )
};

export default NavBar;