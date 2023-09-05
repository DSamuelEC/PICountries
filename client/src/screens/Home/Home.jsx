import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Countries from "../../components/countries/Countries";
import NavBar from "../../components/navbar/NavBar";
import { getCountries } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return (
        <div>
            <NavBar />
            <Countries />
        </div>
    )

};

export default Home;