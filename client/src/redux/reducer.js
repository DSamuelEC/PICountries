import {
    GET_COUNTRIES,
    GET_COUNTRY_ID,
    CLEAN_DETAIL,
    GET_COUNTRIES_NAME,
    SET_PAGE,
    FILTERS_CONTINENT,
    RESET_ALL
} from "./actionsType";

const initialState = {
    allCountries: [],
    country: {},
    page: 0,
    filterByContinent: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                country: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                country: {}
            }
        case GET_COUNTRIES_NAME:
            return {
                ...state,
                allCountries: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case FILTERS_CONTINENT:
            return {
                ...state,
                filterByContinent: action.payload
            }
        case RESET_ALL:
            return{
                ...state,
                page: 0,
                filterByContinent: ''
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;