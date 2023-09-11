import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_COUNTRY_ID,
    CLEAN_DETAIL,
    GET_COUNTRIES_NAME,
    SET_PAGE,
    FILTERS_CONTINENT,
    RESET_ALL
} from "./actionsType";

export const getCountries = () => {
    return async function (dispatch) {
        const allCountries = await axios('http://localhost:3001/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: allCountries.data
        })
    }
};

export const getCountryId = (id) => {
    return async function (dispatch) {
        const countryId = await axios(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: GET_COUNTRY_ID,
            payload: countryId.data
        })
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
};

export const getCountryName = (name) => {
    return async function (dispatch) {
        const countryPerName = await axios(`http://localhost:3001/countries/?name=${name}`)
        return dispatch({
            type: GET_COUNTRIES_NAME,
            payload: countryPerName.data
        })
    }
};

export const setPage = (payload) => {
    return {
        type: SET_PAGE,
        payload
    }
};

export const filterContinent = (payload) => {
    return {
        type: FILTERS_CONTINENT,
        payload
    }
};

export const resetAll = () => {
    return {
        type: RESET_ALL
    }
};