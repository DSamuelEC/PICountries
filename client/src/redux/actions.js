import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_COUNTRY_ID,
    CLEAN_DETAIL,
    GET_COUNTRIES_NAME,
    SET_PAGE,
    FILTERS_CONTINENT,
    RESET_ALL,
    GET_ACTIVITIES,
    FILTER_ACTIVITIES,
    SORT_NAME,
    SORT_POPULATION
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

export const getActivities = () => {
    return async function (dispatch) {
        const allActivities = await axios('http://localhost:3001/activities')
        return dispatch({
            type: GET_ACTIVITIES,
            payload: allActivities.data
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

export const filterActivities = (payload) => {
    return {
        type: FILTER_ACTIVITIES,
        payload
    }
};

export const sortName = (payload) => {
    return {
        type: SORT_NAME,
        payload
    }
};

export const sortPopulation = (payload) => {
    return {
        type: SORT_POPULATION,
        payload
    }
};

export const resetAll = () => {
    return {
        type: RESET_ALL
    }
};