import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Countries from "../../components/countries/Countries";
import NavBar from "../../components/navbar/NavBar";
import { getActivities, getCountries } from "../../redux/actions";
import FiltersAndSorts from "../../components/filtersAndSorts/FiltersAndSorts";

import './Home.styles.css'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [])
    
    return (
        <div className="container">
            <NavBar />
            <hr />
            <FiltersAndSorts />
            <hr />
            <Countries />
        </div>
    )

};

export default Home;