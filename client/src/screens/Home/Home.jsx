import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Countries from "../../components/countries/Countries";
import NavBar from "../../components/navbar/NavBar";
import { getCountries } from "../../redux/actions";
import FiltersAndSorts from "../../components/filtersAndSorts/FiltersAndSorts";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return (
        <div>
            <NavBar />
            <hr />
            <FiltersAndSorts />
            <hr />
            <Countries />
        </div>
    )

};

export default Home;